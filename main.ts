/**
 * KUJU Block Design
 */

enum ON_OFF {
    //% block="ON"
    ON,
    //% block="OFF"
    OFF
}

//% color=#ff8c1a weight=100 icon="\uf009" block="KUJU"
namespace kuju {
    //% blockId=onPlug block="set Smart Plug to %_plugVal"
    export function onPlug(_status: ON_OFF): void {

    }

    //% blockId=onFan block="set Fans to %_fanVal"
    export function onFan(_status: ON_OFF): void {

    }
}

//% color=#ff6680 weight=100 icon="\uf009" block="Devices"
namespace device {


}