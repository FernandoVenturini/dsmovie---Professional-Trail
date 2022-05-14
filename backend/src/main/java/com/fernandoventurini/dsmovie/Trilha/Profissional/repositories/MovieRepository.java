package com.fernandoventurini.dsmovie.Trilha.Profissional.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fernandoventurini.dsmovie.Trilha.Profissional.entities.Movie;

public interface MovieRepository  extends JpaRepository<Movie, Long> {

}
