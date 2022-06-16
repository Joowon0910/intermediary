package project.intermediary.repository;
import project.intermediary.entity.BoardTitle;
import project.intermediary.repositoryInterfaces.BoardTitleBaseRepository;

public interface BoardTitleRepository extends BoardTitleBaseRepository<BoardTitle, Integer>{
    BoardTitle findById(String  id);
}
