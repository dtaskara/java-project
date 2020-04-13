package com.example.dina.controller;

import com.example.dina.exception.ResourceNotFoundException;
import com.example.dina.model.Dress;
import com.example.dina.repository.DressRepository;
import com.example.dina.security.services.DressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/product")
public class DressController {

    @Autowired
    private DressRepository dressRepository;
    @Autowired
    private DressService dressService;

    @GetMapping("/dress")
    public List<Dress> getAllDress() {
        return dressRepository.findAll();

    }

    @RequestMapping(value = "/dress/page/{page}/{size}", method = RequestMethod.GET)
    public List<Dress> getAllByPage(@PathVariable(name = "page") Integer page,
                                    @PathVariable(name = "size") Integer size) {
        return dressService.getAllByPage(page, size);
    }

    @GetMapping("/dress/{id}")
    public ResponseEntity<Dress> getDressById(@PathVariable(value = "id") Long id)

            throws ResourceNotFoundException {

        Dress dress = dressRepository.findById(id)

                .orElseThrow(() -> new ResourceNotFoundException("Dress not found for this id :: " + id));

        return ResponseEntity.ok().body(dress);

    }



    @PostMapping("/dress/create")

    public Dress createDress(@Valid @RequestBody Dress dress) {

        return dressRepository.save(dress);

    }



    @PutMapping("/dress/update")

    public ResponseEntity<Dress> updateDress(@Valid @RequestBody Dress dressDetails) throws ResourceNotFoundException {

        final Dress updatedDress = dressRepository.save(dressDetails);

        return ResponseEntity.ok(updatedDress);

    }



    @DeleteMapping("/dress/delete/{id}")
    public Map<String, Boolean> deleteMovie(@PathVariable(value = "id") Long id)

            throws ResourceNotFoundException {

        Dress dress = dressRepository.findById(id)

                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));



        dressRepository.delete(dress);

        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted", Boolean.TRUE);

        return response;

    }

}

