package project.intermediary.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "boardtitle_tbl")
public class BoardTitle {
  @Id
  @GeneratedValue
  private int index;
    //id는 작성날짜 + 제목(해싱) + 작성자(해싱)
  private String id;
  private String title;
  private Date dateCreated;
  private String author;
  private int liked;
  private int views;
}
