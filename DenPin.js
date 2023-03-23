class Battery {
    energy;

    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
            if (this.energy === 0) {
                alert('Out of energy');
            }
        }
    }
}

class FlashLamp {
    status = false;
    lampBattery;

    constructor() {
    }

    setLampBattery(battery) {
        this.lampBattery = battery;
    }

    getBatterryInfo() {
        return this.lampBattery.getEnergy();
    }

    light() {
        if (this.status) {
            alert('Light on');
        } else {
            alert('Light off');
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}

let battery1 = new Battery(50);
let lamp = new FlashLamp();
lamp.setLampBattery(battery1);
console.log(lamp.getBatterryInfo());
lamp.turnOn();
lamp.light();
for (let i = 0; i < 100; i++) {
    battery1.decreaseEnergy();
}
console.log(lamp.getBatterryInfo());

