const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;

const definition = [
{
    zigbeeModel: ['FEEDER-F'],
    model: 'Fish Feeder',
    vendor: 'mhaid',
    description: 'MHaid Fish Feeder',

    fromZigbee: [fz.on_off,fz.battery],                 // <-- added here all clusters reported from zigbee
    toZigbee: [tz.on_off],                              // <-- add here all clusters to send commands to zigbee
    exposes: [e.switch(),e.battery()],                  // <-- this will define which fields will be exposed in the definition message t$
    meta: {battery: {voltageToPercentage: '3V_2500'}},  // <-- available options: 3V_2100, 3V_2500, 3V_2500_3200, 3V_1500_2800, 3V_2850_3000, 4LR6AA1_5v, 3V_add 1V, Add_1V_42V_CSM300z2v2, object: {min: 1900, max: 3000}
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoint = device.getEndpoint(1);
        await reporting.bind(endpoint, coordinatorEndpoint, ['genOnOff','genPowerCfg']);
        await reporting.batteryVoltage(endpoint);
    },
},
];

module.exports = definition;
