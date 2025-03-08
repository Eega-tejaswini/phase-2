using Microsoft.EntityFrameworkCore;
using System;
using Webhandson.Models;

namespace Webhandson.Context
{
    public class EmployeeDbContext:DbContext
    {
        public DbSet<Employee> Employees { get; set; }

        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options)
            : base(options) { }

    }
}
