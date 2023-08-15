using System.ComponentModel.DataAnnotations;

namespace ToDoAPP.Models
{
    public class Task
    {

        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}
