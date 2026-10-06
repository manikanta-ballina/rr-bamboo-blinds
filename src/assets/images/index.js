/**
 * Central image registry.
 * Importing through Vite gives us hashed, cache-friendly URLs in production.
 */

// Brand
import logo from './brand/logo.png';
import blindDuo from './brand/blind-duo.png';

// Hero / feature highlights
import featureRain from './features/rain.jpg';
import featureSun from './features/sun.jpg';
import featureDust from './features/dust.jpg';
import featureHeat from './features/heat.jpg';
import featureVentilation from './features/ventilation.jpg';
import featurePrivacy from './features/privacy.jpg';

// Product: No Sheet
import noSheetPlain from './products/no-sheet/plain.jpg';
import noSheetSunlight from './products/no-sheet/sunlight.jpg';
import noSheetAllInOne from './products/no-sheet/all-in-one.jpg';

// Product: Single Sheet
import singleSheetPlain from './products/single-sheet/plain.jpg';
import singleSheetLayers from './products/single-sheet/layers.jpg';
import singleSheetRain from './products/single-sheet/rain.jpg';
import singleSheetSun from './products/single-sheet/sun.jpg';
import singleSheetDust from './products/single-sheet/dust.jpg';
import singleSheetPrivacy from './products/single-sheet/privacy.jpg';

// Product: Double Sheet
import doubleSheetPlain from './products/double-sheet/plain.jpg';
import doubleSheetLayers from './products/double-sheet/layers.jpg';
import doubleSheetDust from './products/double-sheet/dust.jpg';
import doubleSheetMultiColour from './products/double-sheet/multi-colour.jpg';

// Work / installations
import residentialBalcony1 from './work/residential-balcony-1.jpg';
import residentialBalcony2 from './work/residential-balcony-2.jpg';
import residentialBalcony3 from './work/residential-balcony-3.jpg';
import courtyardPergola1 from './work/courtyard-pergola-1.jpg';
import courtyardPergola2 from './work/courtyard-pergola-2.jpg';
import courtyardPergola3 from './work/courtyard-pergola-3.jpg';
import courtyardPergola4 from './work/courtyard-pergola-4.jpg';
import courtyardPergola5 from './work/courtyard-pergola-5.jpg';
import gardenCourtyard1 from './work/garden-courtyard-1.jpg';
import commercialBuilding1 from './work/commercial-building-1.jpg';
import commercialBuilding2 from './work/commercial-building-2.jpg';
import balconyBlinds1 from './work/balcony-blinds-1.jpg';
import balconyBlinds2 from './work/balcony-blinds-2.jpg';
import homeWindows1 from './work/home-windows-1.jpg';
import homeWindows2 from './work/home-windows-2.jpg';
import homeWindows3 from './work/home-windows-3.jpg';
import terraceBlinds1 from './work/terrace-blinds-1.jpg';
import terraceBlinds2 from './work/terrace-blinds-2.jpg';
import terraceBlinds3 from './work/terrace-blinds-3.jpg';
import rooftopRoom1 from './work/rooftop-room-1.jpg';

export const brandImages = { logo, blindDuo };

export const featureImages = {
  rain: featureRain,
  sun: featureSun,
  dust: featureDust,
  heat: featureHeat,
  ventilation: featureVentilation,
  privacy: featurePrivacy,
};

export const productImages = {
  noSheet: {
    plain: noSheetPlain,
    sunlight: noSheetSunlight,
    allInOne: noSheetAllInOne,
  },
  singleSheet: {
    plain: singleSheetPlain,
    layers: singleSheetLayers,
    rain: singleSheetRain,
    sun: singleSheetSun,
    dust: singleSheetDust,
    privacy: singleSheetPrivacy,
  },
  doubleSheet: {
    plain: doubleSheetPlain,
    layers: doubleSheetLayers,
    dust: doubleSheetDust,
    multiColour: doubleSheetMultiColour,
  },
};

export const workImages = {
  residentialBalcony: [residentialBalcony1, residentialBalcony2, residentialBalcony3],
  courtyardPergola: [
    courtyardPergola1,
    courtyardPergola2,
    courtyardPergola3,
    courtyardPergola4,
    courtyardPergola5,
  ],
  gardenCourtyard: [gardenCourtyard1],
  commercialBuilding: [commercialBuilding1, commercialBuilding2],
  balconyBlinds: [balconyBlinds1, balconyBlinds2],
  homeWindows: [homeWindows1, homeWindows2, homeWindows3],
  terraceBlinds: [terraceBlinds1, terraceBlinds2, terraceBlinds3],
  rooftopRoom: [rooftopRoom1],
};
