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
    LOW,
    //% block="OFF"
    OFF
}

enum open_close {
    //% block="open"
    open,
    //% block="close"
    close
}

enum ppl {
    //% block="some"
    some,
    //% block="no"
    no
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

    //% blockId=isPpl block="%_pplStatus | one here"
    export function isPpl(_status: ppl): boolean {

        return true;
    }

    //% blockId=gateway block="Connect KUJU Gateway %user Password %pwd"
    export function gateway(_username: string, _pwd: string): void {

    }

    //% blockId=wifi block="Connect WiFi Name %user Password %pwd"
    export function wifi(_username: string, _pwd: string): void {

    }

}

//% color=#ffab19 weight=100 icon="\uf009" block="Wait"
namespace wait {
    //% blockId=waitTime block="wait %sec seconds"
    export function waitTime(_time: number): void {

    }

}

//% color=#5b99a5 weight=100 icon="\uf009" block="ArtecRobo"
namespace artecrobo {
    
    //% blockId=setServoAsync 
    //% block="同時轉動伺服馬達|速度:%_speed|P13到:|%_angle13 度|P14到: %_angle14 度|P15到: %_angle15 度"
    export function setServoAsync(_speed: number, _angle13: number, _angle14: number, _angle15: number): void {

    }
}