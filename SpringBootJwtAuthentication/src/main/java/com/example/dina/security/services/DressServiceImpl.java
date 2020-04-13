package com.example.dina.security.services;

import com.example.dina.model.Dress;
import com.example.dina.model.DressDto;
import com.example.dina.repository.DressRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "movieService")
public class DressServiceImpl implements DressService {

    @Autowired
    private DressRepository dressRepository;


    public List<Dress> findAll() {
        List<Dress> list = new ArrayList<>();
        dressRepository.findAll().iterator().forEachRemaining(list::add);
        return list;
    }

    @Override
    public List<Dress> getAllByPage(int page, int size) {
        return dressRepository.getAllByPage(new PageRequest(page, size));
    }

    @Override
    public void delete(Long id) {
        dressRepository.deleteById(id);
    }

    @Override
    public Dress findOne(String title) {
        return dressRepository.findByTitle(title);
    }

    @Override
    public Dress findById(Long id) {
        Optional<Dress> optionalMovie = dressRepository.findById(id);
        return optionalMovie.isPresent() ? optionalMovie.get() : null;
    }

    @Override
    public DressDto update(DressDto dressDto) {
        Dress dress = findById(dressDto.getId());
        if(dress != null) {
            BeanUtils.copyProperties(dressDto, dress);
            dressRepository.save(dress);
        }
        return dressDto;
    }

    @Override
    public Dress save(DressDto movie) {
        Dress newDress = new Dress();
        newDress.setTitle(movie.getTitle());
        newDress.setCountry(movie.getCountry());
        newDress.setLength(movie.getLength());
        newDress.setDescription(movie.getDescription());
        return dressRepository.save(newDress);
    }


}
