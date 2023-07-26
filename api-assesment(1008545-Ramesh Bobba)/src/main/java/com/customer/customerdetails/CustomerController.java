package com.customer.customerdetails;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    private List<Customer> customers = new ArrayList<>();

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        customer.setId((long) (customers.size() + 1));
        customers.add(customer);
        return customer;
    }


}
