namespace WebApp_crud.Models
using global::CustomerApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace WebApp_crud.Models
{
    public class CustomerService
    {
        private static List<Customer> _customers = new List<Customer>
        {
            new Customer { CustomerID = 1, Name = "John Doe", Address = "123 Street", Country = "USA", City = "New York", Phoneno = "1234567890" },
            new Customer { CustomerID = 2, Name = "Jane Smith", Address = "456 Avenue", Country = "Canada", City = "Toronto", Phoneno = "0987654321" }
        };

        public List<Customer> GetAllCustomers() => _customers;

        public Customer GetCustomerById(int id) => _customers.FirstOrDefault(c => c.CustomerID == id);

        public void AddCustomer(Customer customer)
        {
            customer.CustomerID = _customers.Max(c => c.CustomerID) + 1;
            _customers.Add(customer);
        }

        public void UpdateCustomer(Customer customer)
        {
            var existingCustomer = _customers.FirstOrDefault(c => c.CustomerID == customer.CustomerID);
            if (existingCustomer != null)
            {
                existingCustomer.Name = customer.Name;
                existingCustomer.Address = customer.Address;
                existingCustomer.Country = customer.Country;
                existingCustomer.City = customer.City;
                existingCustomer.Phoneno = customer.Phoneno;
            }
        }

        public void DeleteCustomer(int id) => _customers.RemoveAll(c => c.CustomerID == id);
    }
}
