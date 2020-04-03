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

enum open_close {
    //% block="open"
    open,
    //% block="close"
    close
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

    //% blockId=isPlugOpen block="Smart Plug is %_plugStatus"
    export function isPlugOpen(_status: ON_OFF): boolean {

        return true;
    }

    //% blockId=isDoorOpen block="Door is %_doorStatus"
    export function isDoorOpen(_status: open_close): boolean {

        return true;
    }

    

}