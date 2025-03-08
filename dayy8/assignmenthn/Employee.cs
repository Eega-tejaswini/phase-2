using System.ComponentModel.DataAnnotations;

namespace Webhandson.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }

        public string? DOB { get; set; }

        public DateTime DOJ { get; set; }
        public int? Salary { get; set; }
        public string? Dept { get; set; }


    }
}
