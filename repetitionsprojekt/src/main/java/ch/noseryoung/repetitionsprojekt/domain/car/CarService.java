package ch.noseryoung.repetitionsprojekt.domain.car;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j2
@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository){this.carRepository = carRepository;}

    public List<Car> getAllCar() {
        log.info("All cars are getting returned");
        return carRepository.findAll();
    }

    public Car getCar(Long carId) throws CarNotFoundException {
        log.info("Car is getting returned");
        return carRepository.findById(carId).orElseThrow(() -> new CarNotFoundException("Car with this Id doesn't exist"));
    }

    public Car createCar(Car car){
        log.info("Genre is getting added");
        return carRepository.save(car);
    }
    public Car updateCar(Long carId, Car newCar) {
        log.info("Car is getting updated");
        return carRepository.findById(carId).map(
                car -> {
                    car.setCarName(newCar.getCarName());
                    car.setCarYear(newCar.getCarYear());
                    return carRepository.save(car);
                }).orElseGet(() -> {
                    newCar.setCarId(carId);
                    log.info("Car is getting created, because Id doesn't exist");
                    return carRepository.save(newCar);
        });
    }

    public ResponseEntity<Car> deleteCar(Long deleteCarByID) throws CarNotFoundException {
        Car carToDelete = carRepository.findById(deleteCarByID).orElseThrow(() -> new CarNotFoundException("Car with this Id doesn't exist"));
        carRepository.deleteById(carToDelete.getCarId());
        log.info("Car is getting deleted");
        return ResponseEntity.ok().body(carToDelete);
    }
}
