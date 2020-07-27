using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace rollerblading_buyers_guide.Models

{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]

        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
        [Required]

        public string Skill { get; set; }
        [Required]

        public string MANEUVERABILITY { get; set; }
        [Required]

        public string Speed { get; set; }
        [Required]

        public string Fit { get; set; }

        public string Price { get; set; }

        public string Suggestion { get; set; }

        [JsonIgnore]
        public string HashedPassword { get; set; }
        [Required]

        public string Password
        {
            set
            {
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }
        public bool IsValidPassword(string password)
        {
            var passwordVerification = new PasswordHasher<User>().VerifyHashedPassword(this, this.HashedPassword, password);
            return passwordVerification == PasswordVerificationResult.Success;
        }
    }
}
