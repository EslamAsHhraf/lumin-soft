using System.ComponentModel.DataAnnotations;

namespace ToDoAPP.Models.DTO
{
    public class TaskDTO
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public DateTime ?DueDate { get; set; }
        [Required]
        public bool ?IsCompleted { get; set; }

    }
}
