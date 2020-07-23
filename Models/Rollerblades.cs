using System.ComponentModel.DataAnnotations;

namespace rollerblading_buyers_guide.Models
{
    public class Rollerblades
    {
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }




    }
}