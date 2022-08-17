package ch.noseryoung.repetitionsprojekt.domain.car;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "car")
public class Car {
    @Id
    @GeneratedValue
    private Long carId;
    @Column(name = "car")
    @Size(min = 1, max = 100)
    private String carName;
    @Column(name = "year")
    private Long carYear;


}
