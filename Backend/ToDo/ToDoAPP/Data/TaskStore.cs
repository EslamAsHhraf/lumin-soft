using ToDoAPP.Models.DTO;

namespace ToDoAPP.Data
{
    public class TaskStore
    {
        public static List<TaskDTO> taskList = new List<TaskDTO> {
                new TaskDTO { Id = 1, Description="Go to Club!",DueDate=new DateTime(2022, 12, 31, 5, 10, 20, DateTimeKind.Utc),IsCompleted=false},
                new TaskDTO { Id = 2, Description="Work",DueDate=new DateTime(2023, 12, 31, 2, 10, 20, DateTimeKind.Utc),IsCompleted=true},
                new TaskDTO { Id = 3, Description="Chat with your friends",DueDate=new DateTime(2023, 12, 31, 15, 10, 20, DateTimeKind.Utc),IsCompleted=true},
                new TaskDTO { Id = 4, Description="Eat salad",DueDate=new DateTime(2023, 12, 31, 15, 20, 19, DateTimeKind.Utc),IsCompleted=false},
        };
    }
}
