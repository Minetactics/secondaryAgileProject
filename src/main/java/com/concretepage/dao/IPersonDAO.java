package com.concretepage.dao;
import java.util.List;
import com.concretepage.entity.Person;
public interface IPersonDAO {
    List<Person> getAllPersons();
    Person getPersonById(int pid);
    Person getPersonByName(String name);
    void addPerson(Person person);
    void updatePerson(Person person);
    void deletePerson(int pid);
    boolean personExists(String name);
}
 