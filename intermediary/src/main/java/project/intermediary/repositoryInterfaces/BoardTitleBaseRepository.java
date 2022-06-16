package project.intermediary.repositoryInterfaces;

import java.util.Optional;

import org.springframework.data.repository.Repository;

public interface BoardTitleBaseRepository<T, ID> extends Repository<T, ID> {
    Optional<T> findById(ID id);
    <S extends T> S save(S entity);
}
