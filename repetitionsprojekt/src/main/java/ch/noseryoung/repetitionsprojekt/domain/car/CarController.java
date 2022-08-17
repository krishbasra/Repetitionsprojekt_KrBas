package ch.noseryoung.repetitionsprojekt.domain.car;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Log4j2
@Data
@AllArgsConstructor
@RestController
@RequestMapping("/car")
public class CarController {
    private final CarService carService;
    private final CarRepository carRepository;

    @GetMapping("/{carId}")
    public ResponseEntity<Car> getCar(@PathVariable("carId") Long carId) throws CarNotFoundException {
        return ResponseEntity.ok().body(carService.getCar(carId));
    }

    @GetMapping
    public ResponseEntity<List<Car>> getAllCar(){return ResponseEntity.ok().body(carService.getAllCar());}

    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        return ResponseEntity.ok().body(carService.createCar(car));
    }

    @PutMapping
    public ResponseEntity<Car> updateCar(@Valid @RequestBody Car newCar, @PathVariable Long carId) {
        return ResponseEntity.ok().body(carService.updateCar(carId, newCar));
    }

    @DeleteMapping("/{carId}")
    public ResponseEntity<Car> deleteCar(@PathVariable Long carId) throws CarNotFoundException {
        return carService.deleteCar(carId);
    }

    @ExceptionHandler(CarNotFoundException.class)
    public ResponseEntity<String> CarNotFoundHandler(CarNotFoundException carNotFoundException) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(carNotFoundException.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> notValidArgumentHandler(MethodArgumentNotValidException methodArgumentNotValidException) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(methodArgumentNotValidException.getMessage());
    }
}
