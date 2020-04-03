/**
 * KUJU Block Design
 */

enum ON_OFF {
    //% block="ON"
    ON,
    //% block="OFF"
    OFF
}

enum mode {
    //% block="AUTO mode"
    AUTO,
    //% block="HIGH mode"
    HIGH,
    //% block="LOW mode"
    LOW
}

//% color=#ff8c1a weight=100 icon="\uf009" block="KUJU"
namespace kuju {
    //% blockId=onPlug block="set Smart Plug to %_plugVal"
    export function onPlug(_status: ON_OFF): void {

    }

    //% blockId=onFan block="set Fans to %_fanVal"
    export function onFan(_status: mode): void {

    }

    //% blockId=onAir block="set Air conditioner to %_airVal"
    export function onAir(_status: ON_OFF): void {

    }

    //% blockId=onLight block="set Light to %_lightVal"
    export function onLight(_status: ON_OFF): void {

    }
}

//% color=#ff6680 weight=100 icon="\uf009" block="Devices"
namespace device {
    //% blockId=smart block="Connect Smart Devices"
    export function smart(): void {

    }

}