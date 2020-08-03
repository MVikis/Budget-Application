using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Budget_Application.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Budget_Application.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BudgetController : ControllerBase
    {
        private readonly BudgetDbContext _context;

        public BudgetController(BudgetDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Budget>>> GetBudgets()
        {
            return await _context.Budget.ToListAsync();  
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Budget>> GetBudget(int id)
        {
            var budget = await _context.Budget.FindAsync(id);
            if(budget == null)
            {
                return NotFound();
            }
            return budget;
        }
        [HttpPost]
        public async Task<ActionResult<Budget>> PostBudget(Budget budget)
        {
            _context.Budget.Add(budget);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetBudget", new { id = budget.Id  }, budget);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Budget>> DeleteBudget(int id)
        {
            var budget = await _context.Budget.FindAsync(id);
            if (budget == null)
            {
                return NotFound();
            }
            _context.Budget.Remove(budget);
            await _context.SaveChangesAsync();
            return budget;
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Budget>> PutBudget(int id, Budget budget)
        {
            if (id != budget.Id)
            {
                return BadRequest();
            }
            _context.Entry(budget).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!BudgetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();

        }
        private bool BudgetExists(int id)
        {
            return _context.Budget.Any(e => e.Id == id);
        }
    }
}
