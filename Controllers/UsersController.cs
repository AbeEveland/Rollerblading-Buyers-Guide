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
    // All of these routes will be at the base URL:     /api/Users
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case UsersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public UsersController(DatabaseContext context)
        {
            _context = context;
        }




        [HttpPost]
        // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<ActionResult<User>> PostUser(User user)
        {
            // Indicate to the database context we want to add this new record
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            // Uses the database context in `_context` to request all of the Rollerblades and
            // return them as a JSON array.
            return await _context.Users.ToListAsync();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            // Find this rollerblades by looking for the specific id
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                // There wasn't a rollerblades with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Users.Remove(user);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(rollerblades)
            //
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers(int id, User user)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != user.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in rollerblades to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from rollerblades
            _context.Entry(user).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!UserExists(id))
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
        private bool UserExists(int id)
        {
            return _context.Users.Any(users => users.Id == id);
        }
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }


    }
}