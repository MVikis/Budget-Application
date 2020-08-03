using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Budget_Application.Models
{
    public class BudgetDbContext:DbContext
    {
        public BudgetDbContext(DbContextOptions<BudgetDbContext>options):base(options)
        {

        }
        public DbSet<Budget> Budgets { get; set; }
    }
}
