using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rollerblading_Buyers_Guide.Models;
using rollerblading_buyers_guide.Models;

namespace Rollerblading_Buyers_Guide.Controllers
{
    // All of these routes will be at the base URL:     /api/Rollerblades
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case RollerbladesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class RollerbladesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public RollerbladesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Rollerblades
        //
        // Returns a list of all your Rollerblades
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rollerblades>>> GetRollerblades(string filter)
        {
            // Uses the database context in `_context` to request all of the Rollerblades and
            // return them as a JSON array.

            if (filter == null)
            {
                return await _context.Rollerblades.ToListAsync();
            }
            else
            {
                return await _context.Rollerblades.Where(restaurant => restaurant.Skill.Contains(filter)).ToListAsync();
            }
        }
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Rollerblades>>> GetRollerblades()
        // {
        //     // Uses the database context in `_context` to request all of the Rollerblades and
        //     // return them as a JSON array.
        //     return await _context.Rollerblades.ToListAsync();
        // }

        // GET: api/Rollerblades/5
        //
        // Fetches and returns a specific rollerblades by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Rollerblades>> GetRollerblades(int id)
        {
            // Find the rollerblades in the database using `FindAsync` to look it up by id
            var rollerblades = await _context.Rollerblades.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (rollerblades == null)
            {
                // Return a `404` response to the client indicating we could not find a rollerblades with this id
                return NotFound();
            }

            //  Return the rollerblades as a JSON object.
            return rollerblades;
        }

        // PUT: api/Rollerblades/5
        //
        // Update an individual rollerblades with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Rollerblades
        // variable named rollerblades. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Rollerblades POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRollerblades(int id, Rollerblades rollerblades)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != rollerblades.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in rollerblades to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from rollerblades
            _context.Entry(rollerblades).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!RollerbladesExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            // return Ok(rollerblades)
            //
            return NoContent();
        }

        // POST: api/Rollerblades
        //
        // Creates a new rollerblades in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Rollerblades
        // variable named rollerblades. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Rollerblades POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Rollerblades>> PostRollerblades(Rollerblades rollerblades)
        {
            // Indicate to the database context we want to add this new record
            _context.Rollerblades.Add(rollerblades);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetRollerblades", new { id = rollerblades.Id }, rollerblades);
        }

        // DELETE: api/Rollerblades/5
        //
        // Deletes an individual rollerblades with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRollerblades(int id)
        {
            // Find this rollerblades by looking for the specific id
            var rollerblades = await _context.Rollerblades.FindAsync(id);
            if (rollerblades == null)
            {
                // There wasn't a rollerblades with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Rollerblades.Remove(rollerblades);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(rollerblades)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing rollerblades by the supplied id
        private bool RollerbladesExists(int id)
        {
            return _context.Rollerblades.Any(rollerblades => rollerblades.Id == id);
        }
    }
}
