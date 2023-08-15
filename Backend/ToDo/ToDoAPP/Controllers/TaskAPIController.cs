using Microsoft.AspNetCore.Mvc;
using ToDoAPP.Data;
using ToDoAPP.Models.DTO;


namespace ToDoAPP.Controllers
{
    [Route("api")]
    [ApiController]
    public class TaskAPIController : ControllerBase
    {
        /// <summary>
        /// get all tasks
        /// </summary>
        /// <returns> all tasks </returns>

        [Route("tasks")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]

        public ActionResult<IEnumerable<TaskDTO>> GetTasks()
        {
            // return ok with list of values
            return Ok(TaskStore.taskList);
        }

        /// <summary>
        /// update IsCompleted of task
        /// </summary>
        /// <param name="id"> id of the task</param>
        /// <param name="TaskDTO">task object</param>
        /// <returns></returns>

        [HttpPut("completeTask/{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public IActionResult CompleteTask (int id, [FromBody] TaskDTO TaskDTO)
        {
            // check if ModelState is valid
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            // check if TaskDTO is null or has different id
            if (TaskDTO == null || id != TaskDTO.Id)
            {
                ModelState.AddModelError("Title", "Bad Request: id not the same in task object.");
                return BadRequest(ModelState);
            }
            var task = TaskStore.taskList.FirstOrDefault(u => u.Id == id);
            // check if task is exit 
            if (task == null)
            {
                ModelState.AddModelError("Title", "Bad Request: task doesn't exit.");
                return BadRequest(ModelState);
            }
            // put new task IsCompleted
            task.IsCompleted = TaskDTO.IsCompleted;

            return NoContent();
        }


    }
}
