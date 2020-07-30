using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Rollerblading_Buyers_Guide.Models;

namespace rollerblading_buyers_guide.Models
{
    public class Rollerblades
    {
        public int Id { get; set; }
        [Required]

        public string Title { get; set; }

        [Required]
        public string Skill { get; set; }
        public string MANEUVERABILITY { get; set; }
        public string Speed { get; set; }
        public string Fit { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string PhotoURL { get; set; }
        // public List<User> Users { get; set; }










    }
}