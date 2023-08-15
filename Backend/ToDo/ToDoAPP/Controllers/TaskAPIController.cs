using Microsoft.AspNetCore.Mvc;
using ToDoAPP.Data;
using ToDoAPP.Models.DTO;


namespace ToDoAPP.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    public class TaskAPIController : ControllerBase
    {
       
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]

        public ActionResult<IEnumerable<TaskDTO>> GetTasks()
        {
            return Ok(TaskStore.taskList);
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public IActionResult CompleteTask (int id, [FromBody] TaskDTO TaskDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (TaskDTO == null || id != TaskDTO.Id)
            {
                return BadRequest();
            }
            var task = TaskStore.taskList.FirstOrDefault(u => u.Id == id);

            if (task == null)
            {
                return BadRequest();
            }
          
            task.IsCompleted = TaskDTO.IsCompleted;

            return NoContent();
        }


    }
}
