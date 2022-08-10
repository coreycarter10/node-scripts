require("dotenv").config();

const Easypost = require("@easypost/api");
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// const data = require("../misc.json");
const data = (
  {
    "id": 409550905,
    "object": "Order",
    "public_id": "order_a45809fcd6a744c2ac31f6311c9f1b29",
    "user": {
      "id": 3757789,
      "public_id": "user_d1674b7976844fe596616926c7650cd4",
      "object": "User",
      "parent_id": null,
      "billing_user_id": 3757789,
      "name": "Jacob Gryn",
      "email": "easypost@co4.com",
      "phone_number": "416-419-7990",
      "balance": "$0.00000",
      "price_per_shipment": "0.00000",
      "disabled": false,
      "disabled_at": null,
      "created_at": "2022-03-21T17:54:10Z",
      "updated_at": "2022-03-21T17:54:50Z",
      "watch": false,
      "source": null,
      "stripe_customer": null,
      "user_flag": {
        "id": 228411
      }
    },
    "user_id": 3757789,
    "mode": "test",
    "is_return": false,
    "reference": null,
    "options": {
      "currency": "USD",
      "payment": {
        "type": "SENDER"
      }
    },
    "messages": [
      {
        "type": "rate_error",
        "carrier": "DHLExpress",
        "message": "customs.line_items.0.weight: 0.000 is less than minimum value 0.001"
      },
      {
        "type": "rate_error",
        "carrier": "CanadaPost",
        "message": "credentials.api_key: Required"
      },
      {
        "type": "rate_error",
        "carrier": "CanadaPost",
        "message": "credentials.customer_number: Required"
      },
      {
        "carrier": "UPS",
        "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
        "type": "rate_message",
        "message": "UPS multi-shipment rate includes this shipment."
      }
    ],
    "created_at": "2022-07-05T19:51:39Z",
    "updated_at": "2022-07-05T19:51:41Z",
    "from_address": {
      "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
      "object": "Address",
      "created_at": "2022-07-05T19:51:37+00:00",
      "updated_at": "2022-07-05T19:51:37+00:00",
      "name": "GEULAH SUPPLIES",
      "company": null,
      "street1": "49 ESTHER CRES",
      "street2": null,
      "city": "VAUGHAN",
      "state": "ON",
      "zip": "L4J 3J8",
      "country": "CA",
      "phone": "4164197990",
      "email": "YAAKOV@GEULAH.CA",
      "mode": "test",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": [
        {
          "id": null,
          "address_id": null,
          "name": "delivery",
          "success": true,
          "results": null,
          "created_at": null,
          "updated_at": null,
          "details": {
            "carrier_route": null,
            "latitude": 43.79744,
            "longitude": -79.44365,
            "time_zone": "America/Toronto"
          },
          "user_id": null
        }
      ]
    },
    "from_address_id": 12850629365,
    "to_address": {
      "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
      "object": "Address",
      "created_at": "2022-07-05T19:51:37+00:00",
      "updated_at": "2022-07-05T19:51:37+00:00",
      "name": "770",
      "company": null,
      "street1": "770 EASTERN PKWY",
      "street2": null,
      "city": "BROOKLYN",
      "state": "NY",
      "zip": "11213-3409",
      "country": "US",
      "phone": "4164197990",
      "email": "YAAKOV@GEULAH.CA",
      "mode": "test",
      "carrier_facility": null,
      "residential": false,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": [
        {
          "id": null,
          "address_id": null,
          "name": "delivery",
          "success": true,
          "results": null,
          "created_at": null,
          "updated_at": null,
          "details": {
            "carrier_route": "C012",
            "latitude": 40.66923,
            "longitude": -73.94287,
            "time_zone": "America/New_York"
          },
          "user_id": null
        }
      ]
    },
    "to_address_id": 12850629416,
    "buyer_address": {
      "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
      "object": "Address",
      "created_at": "2022-07-05T19:51:37+00:00",
      "updated_at": "2022-07-05T19:51:37+00:00",
      "name": "770",
      "company": null,
      "street1": "770 EASTERN PKWY",
      "street2": null,
      "city": "BROOKLYN",
      "state": "NY",
      "zip": "11213-3409",
      "country": "US",
      "phone": "4164197990",
      "email": "YAAKOV@GEULAH.CA",
      "mode": "test",
      "carrier_facility": null,
      "residential": false,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": [
        {
          "id": null,
          "address_id": null,
          "name": "delivery",
          "success": true,
          "results": null,
          "created_at": null,
          "updated_at": null,
          "details": {
            "carrier_route": "C012",
            "latitude": 40.66923,
            "longitude": -73.94287,
            "time_zone": "America/New_York"
          },
          "user_id": null
        }
      ]
    },
    "buyer_address_id": 12850629416,
    "return_address": {
      "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
      "object": "Address",
      "created_at": "2022-07-05T19:51:37+00:00",
      "updated_at": "2022-07-05T19:51:37+00:00",
      "name": "GEULAH SUPPLIES",
      "company": null,
      "street1": "49 ESTHER CRES",
      "street2": null,
      "city": "VAUGHAN",
      "state": "ON",
      "zip": "L4J 3J8",
      "country": "CA",
      "phone": "4164197990",
      "email": "YAAKOV@GEULAH.CA",
      "mode": "test",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": [
        {
          "id": null,
          "address_id": null,
          "name": "delivery",
          "success": true,
          "results": null,
          "created_at": null,
          "updated_at": null,
          "details": {
            "carrier_route": null,
            "latitude": 43.79744,
            "longitude": -79.44365,
            "time_zone": "America/Toronto"
          },
          "user_id": null
        }
      ]
    },
    "return_address_id": 12850629365,
    "customs_info": null,
    "customs_info_id": null,
    "shipments": [
      {
        "created_at": "2022-07-05T19:51:38Z",
        "is_return": false,
        "messages": [],
        "mode": "test",
        "options": {
          "currency": "USD",
          "payment": {
            "type": "SENDER"
          },
          "date_advance": 0
        },
        "reference": null,
        "status": "delivered",
        "tracking_code": "1Z6F82W96892083744",
        "updated_at": "2022-07-05T19:57:01Z",
        "batch_id": null,
        "batch_status": null,
        "batch_message": null,
        "customs_info": {
          "id": "cstinfo_b4a70773810340ffb13a7b6d54156a60",
          "object": "CustomsInfo",
          "created_at": "2022-07-05T19:51:38Z",
          "updated_at": "2022-07-05T19:51:38Z",
          "contents_explanation": null,
          "contents_type": "merchandise",
          "customs_certify": true,
          "customs_signer": null,
          "eel_pfc": "NOEEI 30.37(a)",
          "non_delivery_option": "return",
          "restriction_comments": null,
          "restriction_type": "none",
          "mode": "test",
          "declaration": null,
          "customs_items": [
            {
              "id": "cstitem_977a1110ea5748a096b71a53de2d2d10",
              "object": "CustomsItem",
              "created_at": "2022-07-05T19:51:38Z",
              "updated_at": "2022-07-05T19:51:38Z",
              "description": "Books",
              "hs_tariff_number": "4901.99.00",
              "origin_country": "CN",
              "quantity": 24,
              "value": "5.0",
              "weight": 0.001,
              "code": null,
              "mode": "test",
              "manufacturer": null,
              "currency": null,
              "eccn": null,
              "printed_commodity_identifier": null
            }
          ]
        },
        "from_address": {
          "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "GEULAH SUPPLIES",
          "company": null,
          "street1": "49 ESTHER CRES",
          "street2": null,
          "city": "VAUGHAN",
          "state": "ON",
          "zip": "L4J 3J8",
          "country": "CA",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 43.79744,
                "longitude": -79.44365,
                "time_zone": "America/Toronto"
              }
            }
          }
        },
        "insurance": "50.00",
        "order_id": "order_a45809fcd6a744c2ac31f6311c9f1b29",
        "parcel": {
          "id": "prcl_330414f30af94531a9b303c717e0bd2e",
          "object": "Parcel",
          "created_at": "2022-07-05T19:51:38Z",
          "updated_at": "2022-07-05T19:51:38Z",
          "length": 12,
          "width": 12,
          "height": 12,
          "predefined_package": null,
          "weight": 480,
          "mode": "test"
        },
        "postage_label": {
          "object": "PostageLabel",
          "id": "pl_7afefbc309be4d2aa642c0b43d04132b",
          "created_at": "2022-07-05T19:52:03Z",
          "updated_at": "2022-07-05T19:52:03Z",
          "date_advance": 0,
          "integrated_form": "none",
          "label_date": "2022-07-05T19:52:03Z",
          "label_resolution": 200,
          "label_size": "4x7",
          "label_type": "default",
          "label_file_type": "image/png",
          "label_url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20220705/bb416e3958aa4266955db993337d83fd.png",
          "label_pdf_url": null,
          "label_zpl_url": null,
          "label_epl2_url": null,
          "label_file": null
        },
        "refund_status": null,
        "scan_form": null,
        "selected_rate": {
          "id": "rate_1aacdf12006c44d081895212e50e8a45",
          "object": "Rate",
          "created_at": "2022-07-05T19:52:03Z",
          "updated_at": "2022-07-05T19:52:03Z",
          "mode": "test",
          "service": "UPSStandard",
          "carrier": "UPS",
          "rate": "197.88",
          "currency": "CAD",
          "retail_rate": "199.88",
          "retail_currency": "CAD",
          "list_rate": "199.88",
          "list_currency": "CAD",
          "billing_type": "carrier",
          "delivery_days": 3,
          "delivery_date": "2022-07-08T23:30:00Z",
          "delivery_date_guaranteed": true,
          "est_delivery_days": 3,
          "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
          "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db"
        },
        "tracker": {
          "id": "trk_70ac9bdf5f10439aa5ea1b2f132daa48",
          "object": "Tracker",
          "mode": "test",
          "tracking_code": "1Z6F82W96892083744",
          "status": "delivered",
          "status_detail": "arrived_at_destination",
          "created_at": "2022-07-05T19:52:05Z",
          "updated_at": "2022-07-05T19:55:05Z",
          "signed_by": "John Tester",
          "weight": 17.6,
          "est_delivery_date": "2022-07-05T19:55:05Z",
          "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
          "carrier": "UPS",
          "tracking_details": [
            {
              "object": "TrackingDetail",
              "message": "BILLING INFORMATION RECEIVED",
              "description": null,
              "status": "pre_transit",
              "status_detail": "status_update",
              "datetime": "2022-06-06T10:19:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": null,
                "state": null,
                "country": null,
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "ORIGIN SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "arrived_at_facility",
              "datetime": "2022-06-06T10:43:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "DEPARTURE SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "departed_facility",
              "datetime": "2022-06-07T04:46:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "ARRIVAL SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "arrived_at_facility",
              "datetime": "2022-06-08T05:26:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "OUT FOR DELIVERY",
              "description": null,
              "status": "out_for_delivery",
              "status_detail": "out_for_delivery",
              "datetime": "2022-06-09T04:05:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "DELIVERED",
              "description": null,
              "status": "delivered",
              "status_detail": "arrived_at_destination",
              "datetime": "2022-06-09T11:28:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            }
          ],
          "fees": [],
          "carrier_detail": {
            "object": "CarrierDetail",
            "service": "2ND DAY AIR",
            "container_type": null,
            "est_delivery_date_local": null,
            "est_delivery_time_local": null,
            "origin_location": "SOUTH SAN FRANCISCO CA, US",
            "origin_tracking_location": {
              "object": "TrackingLocation",
              "city": "SOUTH SAN FRANCISCO",
              "state": "CA",
              "country": "US",
              "zip": null
            },
            "destination_location": "SAN FRANCISCO CA US, 94105",
            "destination_tracking_location": {
              "object": "TrackingLocation",
              "city": "SAN FRANCISCO",
              "state": "CA",
              "country": "US",
              "zip": null
            },
            "guaranteed_delivery_date": null,
            "alternate_identifier": null,
            "initial_delivery_attempt": "2022-06-09T11:28:05Z"
          },
          "public_url": "https://track.easypost.com/djE6dHJrXzcwYWM5YmRmNWYxMDQzOWFhNWVhMWIyZjEzMmRhYTQ4"
        },
        "to_address": {
          "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "770",
          "company": null,
          "street1": "770 EASTERN PKWY",
          "street2": null,
          "city": "BROOKLYN",
          "state": "NY",
          "zip": "11213-3409",
          "country": "US",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 40.66923,
                "longitude": -73.94287,
                "time_zone": "America/New_York"
              }
            }
          }
        },
        "usps_zone": null,
        "return_address": {
          "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "GEULAH SUPPLIES",
          "company": null,
          "street1": "49 ESTHER CRES",
          "street2": null,
          "city": "VAUGHAN",
          "state": "ON",
          "zip": "L4J 3J8",
          "country": "CA",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 43.79744,
                "longitude": -79.44365,
                "time_zone": "America/Toronto"
              }
            }
          }
        },
        "buyer_address": {
          "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "770",
          "company": null,
          "street1": "770 EASTERN PKWY",
          "street2": null,
          "city": "BROOKLYN",
          "state": "NY",
          "zip": "11213-3409",
          "country": "US",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 40.66923,
                "longitude": -73.94287,
                "time_zone": "America/New_York"
              }
            }
          }
        },
        "object": "Shipment",
        "_internal": {
          "id": 4071002656,
          "public_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
          "insurance_value_usd": "50.00",
          "user": {
            "id": 3757789,
            "public_id": "user_d1674b7976844fe596616926c7650cd4",
            "object": "User",
            "parent_id": null,
            "billing_user_id": 3757789,
            "name": "Jacob Gryn",
            "email": "easypost@co4.com",
            "phone_number": "416-419-7990",
            "balance": "$0.00000",
            "price_per_shipment": "0.00000",
            "disabled": false,
            "disabled_at": null,
            "created_at": "2022-03-21T17:54:10Z",
            "updated_at": "2022-03-21T17:54:50Z",
            "watch": false,
            "source": null,
            "stripe_customer": null,
            "user_flag": {
              "id": 228411
            }
          },
          "user_id": 3757789,
          "batch_id": null,
          "to_address": {
            "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "770",
            "company": null,
            "street1": "770 EASTERN PKWY",
            "street2": null,
            "city": "BROOKLYN",
            "state": "NY",
            "zip": "11213-3409",
            "country": "US",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": false,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": "C012",
                  "latitude": 40.66923,
                  "longitude": -73.94287,
                  "time_zone": "America/New_York"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629416,
              "public_id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "to_address_id": 12850629416,
          "from_address": {
            "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "GEULAH SUPPLIES",
            "company": null,
            "street1": "49 ESTHER CRES",
            "street2": null,
            "city": "VAUGHAN",
            "state": "ON",
            "zip": "L4J 3J8",
            "country": "CA",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": null,
                  "latitude": 43.79744,
                  "longitude": -79.44365,
                  "time_zone": "America/Toronto"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629365,
              "public_id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "from_address_id": 12850629365,
          "return_address": {
            "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "GEULAH SUPPLIES",
            "company": null,
            "street1": "49 ESTHER CRES",
            "street2": null,
            "city": "VAUGHAN",
            "state": "ON",
            "zip": "L4J 3J8",
            "country": "CA",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": null,
                  "latitude": 43.79744,
                  "longitude": -79.44365,
                  "time_zone": "America/Toronto"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629365,
              "public_id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "return_address_id": 12850629365,
          "buyer_address": {
            "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "770",
            "company": null,
            "street1": "770 EASTERN PKWY",
            "street2": null,
            "city": "BROOKLYN",
            "state": "NY",
            "zip": "11213-3409",
            "country": "US",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": false,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": "C012",
                  "latitude": 40.66923,
                  "longitude": -73.94287,
                  "time_zone": "America/New_York"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629416,
              "public_id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "buyer_address_id": 12850629416,
          "selected_rate": "rate_1aacdf12006c44d081895212e50e8a45",
          "rates": [
            {
              "id": "rate_1675bce03c5d40fb9fdaebfccefa29f7",
              "carrier_account_id": 7900405,
              "carrier": "UPS",
              "service": "ExpressPlus",
              "selected": false,
              "rate_amount": "985.78"
            },
            {
              "id": "rate_c820e93ecbcf4d22809b433a9e7d0196",
              "carrier_account_id": 7900405,
              "carrier": "UPS",
              "service": "UPSSaver",
              "selected": false,
              "rate_amount": "898.25"
            },
            {
              "id": "rate_141ce1bf05344c4fb2924639d097180f",
              "carrier_account_id": 7900405,
              "carrier": "UPS",
              "service": "Express",
              "selected": false,
              "rate_amount": "944.84"
            },
            {
              "id": "rate_1aacdf12006c44d081895212e50e8a45",
              "carrier_account_id": 7900405,
              "carrier": "UPS",
              "service": "UPSStandard",
              "selected": true,
              "rate_amount": "197.88"
            },
            {
              "id": "rate_570b1a8b8ebe4b93b3d54698c4bcbdf8",
              "carrier_account_id": 7900405,
              "carrier": "UPS",
              "service": "3DaySelect",
              "selected": false,
              "rate_amount": "543.01"
            },
            {
              "id": "rate_08ea3a17b73b409288ef08926546cdce",
              "carrier_account_id": 7900405,
              "carrier": "UPS",
              "service": "Expedited",
              "selected": false,
              "rate_amount": "628.68"
            }
          ],
          "postage_label": {
            "id": 1522669671,
            "object": "PostageLabel",
            "public_id": "pl_7afefbc309be4d2aa642c0b43d04132b",
            "mode": "test",
            "user": {
              "id": 3757789,
              "public_id": "user_d1674b7976844fe596616926c7650cd4",
              "object": "User",
              "parent_id": null,
              "billing_user_id": 3757789,
              "name": "Jacob Gryn",
              "email": "easypost@co4.com",
              "phone_number": "416-419-7990",
              "balance": "$0.00000",
              "price_per_shipment": "0.00000",
              "disabled": false,
              "disabled_at": null,
              "created_at": "2022-03-21T17:54:10Z",
              "updated_at": "2022-03-21T17:54:50Z",
              "watch": false,
              "source": null,
              "stripe_customer": null,
              "user_flag": {
                "id": 228411
              }
            },
            "user_id": 3757789,
            "created_at": "2022-07-05T19:52:03Z",
            "updated_at": "2022-07-05T19:52:03Z",
            "date_advance": 0,
            "integrated_form": "none",
            "label_date": "2022-07-05T19:52:03Z",
            "label_size": "4x7",
            "url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20220705/bb416e3958aa4266955db993337d83fd.png",
            "pdf_url": null,
            "zpl_url": null,
            "epl2_url": null,
            "rate_id": "rate_1aacdf12006c44d081895212e50e8a45",
            "selected_rate": "rate_1aacdf12006c44d081895212e50e8a45"
          },
          "postage_label_id": 1522669671,
          "carrier_account_id": 7900405,
          "parcel": {
            "id": "prcl_330414f30af94531a9b303c717e0bd2e",
            "object": "Parcel",
            "created_at": "2022-07-05T19:51:38Z",
            "updated_at": "2022-07-05T19:51:38Z",
            "length": 12,
            "width": 12,
            "height": 12,
            "predefined_package": null,
            "weight": 480,
            "mode": "test",
            "_internal": {
              "id": 4073431171,
              "public_id": "prcl_330414f30af94531a9b303c717e0bd2e",
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              },
              "user_id": 3757789
            }
          },
          "parcel_id": 4073431171,
          "insurance_id": 3579424,
          "customs_info": {
            "id": "cstinfo_b4a70773810340ffb13a7b6d54156a60",
            "object": "CustomsInfo",
            "created_at": "2022-07-05T19:51:38Z",
            "updated_at": "2022-07-05T19:51:38Z",
            "contents_explanation": null,
            "contents_type": "merchandise",
            "customs_certify": true,
            "customs_signer": null,
            "eel_pfc": "NOEEI 30.37(a)",
            "non_delivery_option": "return",
            "restriction_comments": null,
            "restriction_type": "none",
            "mode": "test",
            "declaration": null,
            "customs_items": [
              {
                "id": "cstitem_977a1110ea5748a096b71a53de2d2d10",
                "object": "CustomsItem",
                "created_at": "2022-07-05T19:51:38Z",
                "updated_at": "2022-07-05T19:51:38Z",
                "description": "Books",
                "hs_tariff_number": "4901.99.00",
                "origin_country": "CN",
                "quantity": 24,
                "value": "5.0",
                "weight": 0.001,
                "code": null,
                "mode": "test",
                "manufacturer": null,
                "currency": null,
                "eccn": null,
                "printed_commodity_identifier": null
              }
            ],
            "_internal": {
              "id": 853495182,
              "public_id": "cstinfo_b4a70773810340ffb13a7b6d54156a60",
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              },
              "user_id": 3757789,
              "customs_items": [
                {
                  "id": 1018453266,
                  "object": "CustomsItem",
                  "created_at": "2022-07-05T19:51:38Z",
                  "updated_at": "2022-07-05T19:51:38Z",
                  "description": "Books",
                  "hs_tariff_number": "4901.99.00",
                  "origin_country": "CN",
                  "quantity": 24,
                  "value": "5.0",
                  "weight": 0.001,
                  "code": null,
                  "mode": "test",
                  "manufacturer": null,
                  "currency": null,
                  "eccn": null,
                  "printed_commodity_identifier": null,
                  "public_id": "cstitem_977a1110ea5748a096b71a53de2d2d10",
                  "user": {
                    "id": 3757789,
                    "public_id": "user_d1674b7976844fe596616926c7650cd4",
                    "object": "User",
                    "parent_id": null,
                    "billing_user_id": 3757789,
                    "name": "Jacob Gryn",
                    "email": "easypost@co4.com",
                    "phone_number": "416-419-7990",
                    "balance": "$0.00000",
                    "price_per_shipment": "0.00000",
                    "disabled": false,
                    "disabled_at": null,
                    "created_at": "2022-03-21T17:54:10Z",
                    "updated_at": "2022-03-21T17:54:50Z",
                    "watch": false,
                    "source": null,
                    "stripe_customer": null,
                    "user_flag": {
                      "id": 228411
                    }
                  },
                  "user_id": 3757789
                }
              ]
            }
          },
          "customs_info_id": 853495182,
          "scan_form": null,
          "scan_form_id": null,
          "tracker": {
            "id": "trk_70ac9bdf5f10439aa5ea1b2f132daa48",
            "object": "Tracker",
            "mode": "test",
            "tracking_code": "1Z6F82W96892083744",
            "status": "delivered",
            "status_detail": "arrived_at_destination",
            "created_at": "2022-07-05T19:52:05Z",
            "updated_at": "2022-07-05T19:55:05Z",
            "signed_by": "John Tester",
            "weight": 17.6,
            "est_delivery_date": "2022-07-05T19:55:05Z",
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier": "UPS",
            "tracking_details": [
              {
                "object": "TrackingDetail",
                "message": "BILLING INFORMATION RECEIVED",
                "description": null,
                "status": "pre_transit",
                "status_detail": "status_update",
                "datetime": "2022-06-06T10:19:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": null,
                  "state": null,
                  "country": null,
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "ORIGIN SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "arrived_at_facility",
                "datetime": "2022-06-06T10:43:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SOUTH SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "DEPARTURE SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "departed_facility",
                "datetime": "2022-06-07T04:46:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SOUTH SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "ARRIVAL SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "arrived_at_facility",
                "datetime": "2022-06-08T05:26:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "OUT FOR DELIVERY",
                "description": null,
                "status": "out_for_delivery",
                "status_detail": "out_for_delivery",
                "datetime": "2022-06-09T04:05:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "DELIVERED",
                "description": null,
                "status": "delivered",
                "status_detail": "arrived_at_destination",
                "datetime": "2022-06-09T11:28:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              }
            ],
            "carrier_detail": {
              "object": "CarrierDetail",
              "service": "2ND DAY AIR",
              "container_type": null,
              "est_delivery_date_local": null,
              "est_delivery_time_local": null,
              "origin_location": "SOUTH SAN FRANCISCO CA, US",
              "origin_tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              },
              "destination_location": "SAN FRANCISCO CA US, 94105",
              "destination_tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              },
              "guaranteed_delivery_date": null,
              "alternate_identifier": null,
              "initial_delivery_attempt": "2022-06-09T11:28:05Z"
            },
            "finalized": true,
            "is_return": false,
            "public_url": "https://track.easypost.com/djE6dHJrXzcwYWM5YmRmNWYxMDQzOWFhNWVhMWIyZjEzMmRhYTQ4",
            "fees": []
          },
          "tracker_id": "trk_70ac9bdf5f10439aa5ea1b2f132daa48",
          "order_id": 409550905,
          "refund": null,
          "refund_id": null,
          "forms": [
            {
              "id": 42502706,
              "public_id": "form_d7a476c20bbc469ca599be16fb669a70",
              "form_type": "commercial_invoice",
              "source": "carrier"
            }
          ],
          "fees": [
            {
              "object": "Fee",
              "type": "LabelFee",
              "amount": "0.00000",
              "charged": true,
              "refunded": false,
              "_internal": {
                "id": 2916243590,
                "user": {
                  "id": 3757789,
                  "public_id": "user_d1674b7976844fe596616926c7650cd4",
                  "object": "User",
                  "parent_id": null,
                  "billing_user_id": 3757789,
                  "name": "Jacob Gryn",
                  "email": "easypost@co4.com",
                  "phone_number": "416-419-7990",
                  "balance": "$0.00000",
                  "price_per_shipment": "0.00000",
                  "disabled": false,
                  "disabled_at": null,
                  "created_at": "2022-03-21T17:54:10Z",
                  "updated_at": "2022-03-21T17:54:50Z",
                  "watch": false,
                  "source": null,
                  "stripe_customer": null,
                  "user_flag": {
                    "id": 228411
                  }
                },
                "user_id": 3757789,
                "payment_log": null,
                "payment_log_id": null,
                "created_at": "2022-07-05T19:52:01Z"
              }
            },
            {
              "object": "Fee",
              "type": "InsuranceFee",
              "amount": "0.25000",
              "charged": true,
              "refunded": false,
              "_internal": {
                "id": 2916243591,
                "user": {
                  "id": 3757789,
                  "public_id": "user_d1674b7976844fe596616926c7650cd4",
                  "object": "User",
                  "parent_id": null,
                  "billing_user_id": 3757789,
                  "name": "Jacob Gryn",
                  "email": "easypost@co4.com",
                  "phone_number": "416-419-7990",
                  "balance": "$0.00000",
                  "price_per_shipment": "0.00000",
                  "disabled": false,
                  "disabled_at": null,
                  "created_at": "2022-03-21T17:54:10Z",
                  "updated_at": "2022-03-21T17:54:50Z",
                  "watch": false,
                  "source": null,
                  "stripe_customer": null,
                  "user_flag": {
                    "id": 228411
                  }
                },
                "user_id": 3757789,
                "payment_log": null,
                "payment_log_id": null,
                "created_at": "2022-07-05T19:52:01Z"
              }
            }
          ]
        },
        "rates": [
          {
            "object": "Rate",
            "created_at": "2022-07-05T19:51:41Z",
            "updated_at": "2022-07-05T19:51:41Z",
            "mode": "test",
            "service": "ExpressPlus",
            "carrier": "UPS",
            "rate": "985.78",
            "currency": "CAD",
            "retail_rate": "995.74",
            "retail_currency": "CAD",
            "list_rate": "995.74",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": null,
            "delivery_date": null,
            "delivery_date_guaranteed": false,
            "est_delivery_days": null,
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
            "id": "rate_1675bce03c5d40fb9fdaebfccefa29f7"
          },
          {
            "object": "Rate",
            "created_at": "2022-07-05T19:51:41Z",
            "updated_at": "2022-07-05T19:51:41Z",
            "mode": "test",
            "service": "UPSSaver",
            "carrier": "UPS",
            "rate": "898.25",
            "currency": "CAD",
            "retail_rate": "907.32",
            "retail_currency": "CAD",
            "list_rate": "907.32",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": 1,
            "delivery_date": "2022-07-06T23:30:00Z",
            "delivery_date_guaranteed": true,
            "est_delivery_days": 1,
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
            "id": "rate_c820e93ecbcf4d22809b433a9e7d0196"
          },
          {
            "object": "Rate",
            "created_at": "2022-07-05T19:51:41Z",
            "updated_at": "2022-07-05T19:51:41Z",
            "mode": "test",
            "service": "Express",
            "carrier": "UPS",
            "rate": "944.84",
            "currency": "CAD",
            "retail_rate": "954.38",
            "retail_currency": "CAD",
            "list_rate": "954.38",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": 1,
            "delivery_date": "2022-07-06T10:30:00Z",
            "delivery_date_guaranteed": true,
            "est_delivery_days": 1,
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
            "id": "rate_141ce1bf05344c4fb2924639d097180f"
          },
          {
            "object": "Rate",
            "created_at": "2022-07-05T19:51:41Z",
            "updated_at": "2022-07-05T19:51:41Z",
            "mode": "test",
            "service": "UPSStandard",
            "carrier": "UPS",
            "rate": "197.88",
            "currency": "CAD",
            "retail_rate": "199.88",
            "retail_currency": "CAD",
            "list_rate": "199.88",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": 3,
            "delivery_date": "2022-07-08T23:30:00Z",
            "delivery_date_guaranteed": true,
            "est_delivery_days": 3,
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
            "id": "rate_1aacdf12006c44d081895212e50e8a45"
          },
          {
            "object": "Rate",
            "created_at": "2022-07-05T19:51:41Z",
            "updated_at": "2022-07-05T19:51:41Z",
            "mode": "test",
            "service": "3DaySelect",
            "carrier": "UPS",
            "rate": "543.01",
            "currency": "CAD",
            "retail_rate": "548.50",
            "retail_currency": "CAD",
            "list_rate": "548.50",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": 3,
            "delivery_date": "2022-07-08T23:30:00Z",
            "delivery_date_guaranteed": true,
            "est_delivery_days": 3,
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
            "id": "rate_570b1a8b8ebe4b93b3d54698c4bcbdf8"
          },
          {
            "object": "Rate",
            "created_at": "2022-07-05T19:51:41Z",
            "updated_at": "2022-07-05T19:51:41Z",
            "mode": "test",
            "service": "Expedited",
            "carrier": "UPS",
            "rate": "628.68",
            "currency": "CAD",
            "retail_rate": "635.03",
            "retail_currency": "CAD",
            "list_rate": "635.03",
            "list_currency": "CAD",
            "billing_type": "carrier",
            "delivery_days": 2,
            "delivery_date": "2022-07-07T23:30:00Z",
            "delivery_date_guaranteed": true,
            "est_delivery_days": 2,
            "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
            "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db",
            "id": "rate_08ea3a17b73b409288ef08926546cdce"
          }
        ],
        "forms": [
          {
            "object": "Form",
            "created_at": "2022-07-05T19:52:03Z",
            "updated_at": "2022-07-05T19:52:04Z",
            "mode": "test",
            "form_type": "commercial_invoice",
            "form_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/form/20220705/2baea062d4404d2ea7b157dd5b0ea232.pdf",
            "submitted_electronically": true,
            "id": "form_d7a476c20bbc469ca599be16fb669a70"
          }
        ],
        "fees": [
          {
            "object": "Fee",
            "type": "LabelFee",
            "amount": "0.00000",
            "charged": true,
            "refunded": false
          },
          {
            "object": "Fee",
            "type": "InsuranceFee",
            "amount": "0.25000",
            "charged": true,
            "refunded": false
          }
        ],
        "id": "shp_4b1ea5131c1449b2ae91a968e9696f49"
      },
      {
        "created_at": "2022-07-05T19:51:39Z",
        "is_return": false,
        "messages": [],
        "mode": "test",
        "options": {
          "currency": "USD",
          "payment": {
            "type": "SENDER"
          },
          "date_advance": 0
        },
        "reference": null,
        "status": "delivered",
        "tracking_code": "1Z6F82W96892716355",
        "updated_at": "2022-07-05T19:56:43Z",
        "batch_id": null,
        "batch_status": null,
        "batch_message": null,
        "customs_info": {
          "id": "cstinfo_6f425a0a7464492eb938187dd2b1fd8b",
          "object": "CustomsInfo",
          "created_at": "2022-07-05T19:51:38Z",
          "updated_at": "2022-07-05T19:51:38Z",
          "contents_explanation": null,
          "contents_type": "merchandise",
          "customs_certify": true,
          "customs_signer": null,
          "eel_pfc": "NOEEI 30.37(a)",
          "non_delivery_option": "return",
          "restriction_comments": null,
          "restriction_type": "none",
          "mode": "test",
          "declaration": null,
          "customs_items": [
            {
              "id": "cstitem_ce3830520f4947e5839ec356516c0403",
              "object": "CustomsItem",
              "created_at": "2022-07-05T19:51:38Z",
              "updated_at": "2022-07-05T19:51:38Z",
              "description": "Ignore",
              "hs_tariff_number": null,
              "origin_country": "US",
              "quantity": 1,
              "value": "0.0",
              "weight": 0.001,
              "code": null,
              "mode": "test",
              "manufacturer": null,
              "currency": null,
              "eccn": null,
              "printed_commodity_identifier": null
            }
          ]
        },
        "from_address": {
          "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "GEULAH SUPPLIES",
          "company": null,
          "street1": "49 ESTHER CRES",
          "street2": null,
          "city": "VAUGHAN",
          "state": "ON",
          "zip": "L4J 3J8",
          "country": "CA",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 43.79744,
                "longitude": -79.44365,
                "time_zone": "America/Toronto"
              }
            }
          }
        },
        "insurance": null,
        "order_id": "order_a45809fcd6a744c2ac31f6311c9f1b29",
        "parcel": {
          "id": "prcl_e76846298ccf42b096ddff36faacfc04",
          "object": "Parcel",
          "created_at": "2022-07-05T19:51:39Z",
          "updated_at": "2022-07-05T19:51:39Z",
          "length": 12,
          "width": 12,
          "height": 12,
          "predefined_package": null,
          "weight": 512,
          "mode": "test"
        },
        "postage_label": {
          "object": "PostageLabel",
          "id": "pl_3000265618fd40d6ba4756f8a6b4a847",
          "created_at": "2022-07-05T19:52:04Z",
          "updated_at": "2022-07-05T19:52:04Z",
          "date_advance": 0,
          "integrated_form": "none",
          "label_date": "2022-07-05T19:52:04Z",
          "label_resolution": 200,
          "label_size": "4x7",
          "label_type": "default",
          "label_file_type": "image/png",
          "label_url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20220705/2454ad22cd1a4b64878b710dd63f1266.png",
          "label_pdf_url": null,
          "label_zpl_url": null,
          "label_epl2_url": null,
          "label_file": null
        },
        "refund_status": null,
        "scan_form": null,
        "selected_rate": {
          "id": "rate_1aacdf12006c44d081895212e50e8a45",
          "object": "Rate",
          "created_at": "2022-07-05T19:52:04Z",
          "updated_at": "2022-07-05T19:52:04Z",
          "mode": "test",
          "service": "UPSStandard",
          "carrier": "UPS",
          "rate": "197.88",
          "currency": "CAD",
          "retail_rate": "199.88",
          "retail_currency": "CAD",
          "list_rate": "199.88",
          "list_currency": "CAD",
          "billing_type": "carrier",
          "delivery_days": 3,
          "delivery_date": "2022-07-08T23:30:00Z",
          "delivery_date_guaranteed": true,
          "est_delivery_days": 3,
          "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
          "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db"
        },
        "tracker": {
          "id": "trk_a40af5bdd6d649f8b52bc2dd4592dc33",
          "object": "Tracker",
          "mode": "test",
          "tracking_code": "1Z6F82W96892716355",
          "status": "delivered",
          "status_detail": "arrived_at_destination",
          "created_at": "2022-07-05T19:52:05Z",
          "updated_at": "2022-07-05T19:55:05Z",
          "signed_by": "John Tester",
          "weight": 17.6,
          "est_delivery_date": "2022-07-05T19:55:05Z",
          "shipment_id": "shp_adcc241afee14c28a2ac7852f74536cd",
          "carrier": "UPS",
          "tracking_details": [
            {
              "object": "TrackingDetail",
              "message": "BILLING INFORMATION RECEIVED",
              "description": null,
              "status": "pre_transit",
              "status_detail": "status_update",
              "datetime": "2022-06-06T10:19:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": null,
                "state": null,
                "country": null,
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "ORIGIN SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "arrived_at_facility",
              "datetime": "2022-06-06T10:43:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "DEPARTURE SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "departed_facility",
              "datetime": "2022-06-07T04:46:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "ARRIVAL SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "arrived_at_facility",
              "datetime": "2022-06-08T05:26:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "OUT FOR DELIVERY",
              "description": null,
              "status": "out_for_delivery",
              "status_detail": "out_for_delivery",
              "datetime": "2022-06-09T04:05:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "DELIVERED",
              "description": null,
              "status": "delivered",
              "status_detail": "arrived_at_destination",
              "datetime": "2022-06-09T11:28:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            }
          ],
          "fees": [],
          "carrier_detail": {
            "object": "CarrierDetail",
            "service": "2ND DAY AIR",
            "container_type": null,
            "est_delivery_date_local": null,
            "est_delivery_time_local": null,
            "origin_location": "SOUTH SAN FRANCISCO CA, US",
            "origin_tracking_location": {
              "object": "TrackingLocation",
              "city": "SOUTH SAN FRANCISCO",
              "state": "CA",
              "country": "US",
              "zip": null
            },
            "destination_location": "SAN FRANCISCO CA US, 94105",
            "destination_tracking_location": {
              "object": "TrackingLocation",
              "city": "SAN FRANCISCO",
              "state": "CA",
              "country": "US",
              "zip": null
            },
            "guaranteed_delivery_date": null,
            "alternate_identifier": null,
            "initial_delivery_attempt": "2022-06-09T11:28:05Z"
          },
          "public_url": "https://track.easypost.com/djE6dHJrX2E0MGFmNWJkZDZkNjQ5ZjhiNTJiYzJkZDQ1OTJkYzMz"
        },
        "to_address": {
          "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "770",
          "company": null,
          "street1": "770 EASTERN PKWY",
          "street2": null,
          "city": "BROOKLYN",
          "state": "NY",
          "zip": "11213-3409",
          "country": "US",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 40.66923,
                "longitude": -73.94287,
                "time_zone": "America/New_York"
              }
            }
          }
        },
        "usps_zone": null,
        "return_address": {
          "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "GEULAH SUPPLIES",
          "company": null,
          "street1": "49 ESTHER CRES",
          "street2": null,
          "city": "VAUGHAN",
          "state": "ON",
          "zip": "L4J 3J8",
          "country": "CA",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 43.79744,
                "longitude": -79.44365,
                "time_zone": "America/Toronto"
              }
            }
          }
        },
        "buyer_address": {
          "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "770",
          "company": null,
          "street1": "770 EASTERN PKWY",
          "street2": null,
          "city": "BROOKLYN",
          "state": "NY",
          "zip": "11213-3409",
          "country": "US",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 40.66923,
                "longitude": -73.94287,
                "time_zone": "America/New_York"
              }
            }
          }
        },
        "object": "Shipment",
        "_internal": {
          "id": 4071002661,
          "public_id": "shp_adcc241afee14c28a2ac7852f74536cd",
          "insurance_value_usd": null,
          "user": {
            "id": 3757789,
            "public_id": "user_d1674b7976844fe596616926c7650cd4",
            "object": "User",
            "parent_id": null,
            "billing_user_id": 3757789,
            "name": "Jacob Gryn",
            "email": "easypost@co4.com",
            "phone_number": "416-419-7990",
            "balance": "$0.00000",
            "price_per_shipment": "0.00000",
            "disabled": false,
            "disabled_at": null,
            "created_at": "2022-03-21T17:54:10Z",
            "updated_at": "2022-03-21T17:54:50Z",
            "watch": false,
            "source": null,
            "stripe_customer": null,
            "user_flag": {
              "id": 228411
            }
          },
          "user_id": 3757789,
          "batch_id": null,
          "to_address": {
            "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "770",
            "company": null,
            "street1": "770 EASTERN PKWY",
            "street2": null,
            "city": "BROOKLYN",
            "state": "NY",
            "zip": "11213-3409",
            "country": "US",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": false,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": "C012",
                  "latitude": 40.66923,
                  "longitude": -73.94287,
                  "time_zone": "America/New_York"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629416,
              "public_id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "to_address_id": 12850629416,
          "from_address": {
            "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "GEULAH SUPPLIES",
            "company": null,
            "street1": "49 ESTHER CRES",
            "street2": null,
            "city": "VAUGHAN",
            "state": "ON",
            "zip": "L4J 3J8",
            "country": "CA",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": null,
                  "latitude": 43.79744,
                  "longitude": -79.44365,
                  "time_zone": "America/Toronto"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629365,
              "public_id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "from_address_id": 12850629365,
          "return_address": {
            "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "GEULAH SUPPLIES",
            "company": null,
            "street1": "49 ESTHER CRES",
            "street2": null,
            "city": "VAUGHAN",
            "state": "ON",
            "zip": "L4J 3J8",
            "country": "CA",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": null,
                  "latitude": 43.79744,
                  "longitude": -79.44365,
                  "time_zone": "America/Toronto"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629365,
              "public_id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "return_address_id": 12850629365,
          "buyer_address": {
            "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "770",
            "company": null,
            "street1": "770 EASTERN PKWY",
            "street2": null,
            "city": "BROOKLYN",
            "state": "NY",
            "zip": "11213-3409",
            "country": "US",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": false,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": "C012",
                  "latitude": 40.66923,
                  "longitude": -73.94287,
                  "time_zone": "America/New_York"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629416,
              "public_id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "buyer_address_id": 12850629416,
          "selected_rate": "rate_1aacdf12006c44d081895212e50e8a45",
          "rates": [],
          "postage_label": {
            "id": 1522669690,
            "object": "PostageLabel",
            "public_id": "pl_3000265618fd40d6ba4756f8a6b4a847",
            "mode": "test",
            "user": {
              "id": 3757789,
              "public_id": "user_d1674b7976844fe596616926c7650cd4",
              "object": "User",
              "parent_id": null,
              "billing_user_id": 3757789,
              "name": "Jacob Gryn",
              "email": "easypost@co4.com",
              "phone_number": "416-419-7990",
              "balance": "$0.00000",
              "price_per_shipment": "0.00000",
              "disabled": false,
              "disabled_at": null,
              "created_at": "2022-03-21T17:54:10Z",
              "updated_at": "2022-03-21T17:54:50Z",
              "watch": false,
              "source": null,
              "stripe_customer": null,
              "user_flag": {
                "id": 228411
              }
            },
            "user_id": 3757789,
            "created_at": "2022-07-05T19:52:04Z",
            "updated_at": "2022-07-05T19:52:04Z",
            "date_advance": 0,
            "integrated_form": "none",
            "label_date": "2022-07-05T19:52:04Z",
            "label_size": "4x7",
            "url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20220705/2454ad22cd1a4b64878b710dd63f1266.png",
            "pdf_url": null,
            "zpl_url": null,
            "epl2_url": null,
            "rate_id": "rate_1aacdf12006c44d081895212e50e8a45",
            "selected_rate": "rate_1aacdf12006c44d081895212e50e8a45"
          },
          "postage_label_id": 1522669690,
          "carrier_account_id": 7900405,
          "parcel": {
            "id": "prcl_e76846298ccf42b096ddff36faacfc04",
            "object": "Parcel",
            "created_at": "2022-07-05T19:51:39Z",
            "updated_at": "2022-07-05T19:51:39Z",
            "length": 12,
            "width": 12,
            "height": 12,
            "predefined_package": null,
            "weight": 512,
            "mode": "test",
            "_internal": {
              "id": 4073431177,
              "public_id": "prcl_e76846298ccf42b096ddff36faacfc04",
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              },
              "user_id": 3757789
            }
          },
          "parcel_id": 4073431177,
          "insurance_id": null,
          "customs_info": {
            "id": "cstinfo_6f425a0a7464492eb938187dd2b1fd8b",
            "object": "CustomsInfo",
            "created_at": "2022-07-05T19:51:38Z",
            "updated_at": "2022-07-05T19:51:38Z",
            "contents_explanation": null,
            "contents_type": "merchandise",
            "customs_certify": true,
            "customs_signer": null,
            "eel_pfc": "NOEEI 30.37(a)",
            "non_delivery_option": "return",
            "restriction_comments": null,
            "restriction_type": "none",
            "mode": "test",
            "declaration": null,
            "customs_items": [
              {
                "id": "cstitem_ce3830520f4947e5839ec356516c0403",
                "object": "CustomsItem",
                "created_at": "2022-07-05T19:51:38Z",
                "updated_at": "2022-07-05T19:51:38Z",
                "description": "Ignore",
                "hs_tariff_number": null,
                "origin_country": "US",
                "quantity": 1,
                "value": "0.0",
                "weight": 0.001,
                "code": null,
                "mode": "test",
                "manufacturer": null,
                "currency": null,
                "eccn": null,
                "printed_commodity_identifier": null
              }
            ],
            "_internal": {
              "id": 853495193,
              "public_id": "cstinfo_6f425a0a7464492eb938187dd2b1fd8b",
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              },
              "user_id": 3757789,
              "customs_items": [
                {
                  "id": 1018453274,
                  "object": "CustomsItem",
                  "created_at": "2022-07-05T19:51:38Z",
                  "updated_at": "2022-07-05T19:51:38Z",
                  "description": "Ignore",
                  "hs_tariff_number": null,
                  "origin_country": "US",
                  "quantity": 1,
                  "value": "0.0",
                  "weight": 0.001,
                  "code": null,
                  "mode": "test",
                  "manufacturer": null,
                  "currency": null,
                  "eccn": null,
                  "printed_commodity_identifier": null,
                  "public_id": "cstitem_ce3830520f4947e5839ec356516c0403",
                  "user": {
                    "id": 3757789,
                    "public_id": "user_d1674b7976844fe596616926c7650cd4",
                    "object": "User",
                    "parent_id": null,
                    "billing_user_id": 3757789,
                    "name": "Jacob Gryn",
                    "email": "easypost@co4.com",
                    "phone_number": "416-419-7990",
                    "balance": "$0.00000",
                    "price_per_shipment": "0.00000",
                    "disabled": false,
                    "disabled_at": null,
                    "created_at": "2022-03-21T17:54:10Z",
                    "updated_at": "2022-03-21T17:54:50Z",
                    "watch": false,
                    "source": null,
                    "stripe_customer": null,
                    "user_flag": {
                      "id": 228411
                    }
                  },
                  "user_id": 3757789
                }
              ]
            }
          },
          "customs_info_id": 853495193,
          "scan_form": null,
          "scan_form_id": null,
          "tracker": {
            "id": "trk_a40af5bdd6d649f8b52bc2dd4592dc33",
            "object": "Tracker",
            "mode": "test",
            "tracking_code": "1Z6F82W96892716355",
            "status": "delivered",
            "status_detail": "arrived_at_destination",
            "created_at": "2022-07-05T19:52:05Z",
            "updated_at": "2022-07-05T19:55:05Z",
            "signed_by": "John Tester",
            "weight": 17.6,
            "est_delivery_date": "2022-07-05T19:55:05Z",
            "shipment_id": "shp_adcc241afee14c28a2ac7852f74536cd",
            "carrier": "UPS",
            "tracking_details": [
              {
                "object": "TrackingDetail",
                "message": "BILLING INFORMATION RECEIVED",
                "description": null,
                "status": "pre_transit",
                "status_detail": "status_update",
                "datetime": "2022-06-06T10:19:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": null,
                  "state": null,
                  "country": null,
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "ORIGIN SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "arrived_at_facility",
                "datetime": "2022-06-06T10:43:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SOUTH SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "DEPARTURE SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "departed_facility",
                "datetime": "2022-06-07T04:46:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SOUTH SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "ARRIVAL SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "arrived_at_facility",
                "datetime": "2022-06-08T05:26:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "OUT FOR DELIVERY",
                "description": null,
                "status": "out_for_delivery",
                "status_detail": "out_for_delivery",
                "datetime": "2022-06-09T04:05:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "DELIVERED",
                "description": null,
                "status": "delivered",
                "status_detail": "arrived_at_destination",
                "datetime": "2022-06-09T11:28:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              }
            ],
            "carrier_detail": {
              "object": "CarrierDetail",
              "service": "2ND DAY AIR",
              "container_type": null,
              "est_delivery_date_local": null,
              "est_delivery_time_local": null,
              "origin_location": "SOUTH SAN FRANCISCO CA, US",
              "origin_tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              },
              "destination_location": "SAN FRANCISCO CA US, 94105",
              "destination_tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              },
              "guaranteed_delivery_date": null,
              "alternate_identifier": null,
              "initial_delivery_attempt": "2022-06-09T11:28:05Z"
            },
            "finalized": true,
            "is_return": false,
            "public_url": "https://track.easypost.com/djE6dHJrX2E0MGFmNWJkZDZkNjQ5ZjhiNTJiYzJkZDQ1OTJkYzMz",
            "fees": []
          },
          "tracker_id": "trk_a40af5bdd6d649f8b52bc2dd4592dc33",
          "order_id": 409550905,
          "refund": null,
          "refund_id": null,
          "forms": [
            {
              "id": 42502707,
              "public_id": "form_c1a6b1ea622e47659599c917712ed449",
              "form_type": "commercial_invoice",
              "source": "carrier"
            }
          ],
          "fees": []
        },
        "rates": [],
        "forms": [
          {
            "object": "Form",
            "created_at": "2022-07-05T19:52:04Z",
            "updated_at": "2022-07-05T19:52:04Z",
            "mode": "test",
            "form_type": "commercial_invoice",
            "form_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/form/20220705/d781188ea1cc47f0a6d3a3f4a316113f.pdf",
            "submitted_electronically": true,
            "id": "form_c1a6b1ea622e47659599c917712ed449"
          }
        ],
        "fees": [],
        "id": "shp_adcc241afee14c28a2ac7852f74536cd"
      },
      {
        "created_at": "2022-07-05T19:51:39Z",
        "is_return": false,
        "messages": [],
        "mode": "test",
        "options": {
          "currency": "USD",
          "payment": {
            "type": "SENDER"
          },
          "date_advance": 0
        },
        "reference": null,
        "status": "delivered",
        "tracking_code": "1Z6F82W96892263960",
        "updated_at": "2022-07-05T19:56:39Z",
        "batch_id": null,
        "batch_status": null,
        "batch_message": null,
        "customs_info": {
          "id": "cstinfo_6f425a0a7464492eb938187dd2b1fd8b",
          "object": "CustomsInfo",
          "created_at": "2022-07-05T19:51:38Z",
          "updated_at": "2022-07-05T19:51:38Z",
          "contents_explanation": null,
          "contents_type": "merchandise",
          "customs_certify": true,
          "customs_signer": null,
          "eel_pfc": "NOEEI 30.37(a)",
          "non_delivery_option": "return",
          "restriction_comments": null,
          "restriction_type": "none",
          "mode": "test",
          "declaration": null,
          "customs_items": [
            {
              "id": "cstitem_ce3830520f4947e5839ec356516c0403",
              "object": "CustomsItem",
              "created_at": "2022-07-05T19:51:38Z",
              "updated_at": "2022-07-05T19:51:38Z",
              "description": "Ignore",
              "hs_tariff_number": null,
              "origin_country": "US",
              "quantity": 1,
              "value": "0.0",
              "weight": 0.001,
              "code": null,
              "mode": "test",
              "manufacturer": null,
              "currency": null,
              "eccn": null,
              "printed_commodity_identifier": null
            }
          ]
        },
        "from_address": {
          "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "GEULAH SUPPLIES",
          "company": null,
          "street1": "49 ESTHER CRES",
          "street2": null,
          "city": "VAUGHAN",
          "state": "ON",
          "zip": "L4J 3J8",
          "country": "CA",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 43.79744,
                "longitude": -79.44365,
                "time_zone": "America/Toronto"
              }
            }
          }
        },
        "insurance": null,
        "order_id": "order_a45809fcd6a744c2ac31f6311c9f1b29",
        "parcel": {
          "id": "prcl_24545661111947f4ac14ada2181b1e39",
          "object": "Parcel",
          "created_at": "2022-07-05T19:51:39Z",
          "updated_at": "2022-07-05T19:51:39Z",
          "length": 10,
          "width": 10,
          "height": 10,
          "predefined_package": null,
          "weight": 528,
          "mode": "test"
        },
        "postage_label": {
          "object": "PostageLabel",
          "id": "pl_3d98f85619fa4606a540bc580dfe4e9a",
          "created_at": "2022-07-05T19:52:04Z",
          "updated_at": "2022-07-05T19:52:04Z",
          "date_advance": 0,
          "integrated_form": "none",
          "label_date": "2022-07-05T19:52:04Z",
          "label_resolution": 200,
          "label_size": "4x7",
          "label_type": "default",
          "label_file_type": "image/png",
          "label_url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20220705/6161a43814ce4ed3aeda8ea30eea27fc.png",
          "label_pdf_url": null,
          "label_zpl_url": null,
          "label_epl2_url": null,
          "label_file": null
        },
        "refund_status": null,
        "scan_form": null,
        "selected_rate": {
          "id": "rate_1aacdf12006c44d081895212e50e8a45",
          "object": "Rate",
          "created_at": "2022-07-05T19:52:04Z",
          "updated_at": "2022-07-05T19:52:04Z",
          "mode": "test",
          "service": "UPSStandard",
          "carrier": "UPS",
          "rate": "197.88",
          "currency": "CAD",
          "retail_rate": "199.88",
          "retail_currency": "CAD",
          "list_rate": "199.88",
          "list_currency": "CAD",
          "billing_type": "carrier",
          "delivery_days": 3,
          "delivery_date": "2022-07-08T23:30:00Z",
          "delivery_date_guaranteed": true,
          "est_delivery_days": 3,
          "shipment_id": "shp_4b1ea5131c1449b2ae91a968e9696f49",
          "carrier_account_id": "ca_56f72d43bb594d70a9dc849eda1877db"
        },
        "tracker": {
          "id": "trk_8adae0aaaaeb474782fc78028828e0c9",
          "object": "Tracker",
          "mode": "test",
          "tracking_code": "1Z6F82W96892263960",
          "status": "delivered",
          "status_detail": "arrived_at_destination",
          "created_at": "2022-07-05T19:52:05Z",
          "updated_at": "2022-07-05T19:55:05Z",
          "signed_by": "John Tester",
          "weight": 17.6,
          "est_delivery_date": "2022-07-05T19:55:05Z",
          "shipment_id": "shp_9ab265562bd44e85a30d4c733cdf9b81",
          "carrier": "UPS",
          "tracking_details": [
            {
              "object": "TrackingDetail",
              "message": "BILLING INFORMATION RECEIVED",
              "description": null,
              "status": "pre_transit",
              "status_detail": "status_update",
              "datetime": "2022-06-06T10:19:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": null,
                "state": null,
                "country": null,
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "ORIGIN SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "arrived_at_facility",
              "datetime": "2022-06-06T10:43:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "DEPARTURE SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "departed_facility",
              "datetime": "2022-06-07T04:46:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "ARRIVAL SCAN",
              "description": null,
              "status": "in_transit",
              "status_detail": "arrived_at_facility",
              "datetime": "2022-06-08T05:26:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "OUT FOR DELIVERY",
              "description": null,
              "status": "out_for_delivery",
              "status_detail": "out_for_delivery",
              "datetime": "2022-06-09T04:05:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            },
            {
              "object": "TrackingDetail",
              "message": "DELIVERED",
              "description": null,
              "status": "delivered",
              "status_detail": "arrived_at_destination",
              "datetime": "2022-06-09T11:28:05Z",
              "source": "UPS",
              "carrier_code": null,
              "tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              }
            }
          ],
          "fees": [],
          "carrier_detail": {
            "object": "CarrierDetail",
            "service": "2ND DAY AIR",
            "container_type": null,
            "est_delivery_date_local": null,
            "est_delivery_time_local": null,
            "origin_location": "SOUTH SAN FRANCISCO CA, US",
            "origin_tracking_location": {
              "object": "TrackingLocation",
              "city": "SOUTH SAN FRANCISCO",
              "state": "CA",
              "country": "US",
              "zip": null
            },
            "destination_location": "SAN FRANCISCO CA US, 94105",
            "destination_tracking_location": {
              "object": "TrackingLocation",
              "city": "SAN FRANCISCO",
              "state": "CA",
              "country": "US",
              "zip": null
            },
            "guaranteed_delivery_date": null,
            "alternate_identifier": null,
            "initial_delivery_attempt": "2022-06-09T11:28:05Z"
          },
          "public_url": "https://track.easypost.com/djE6dHJrXzhhZGFlMGFhYWFlYjQ3NDc4MmZjNzgwMjg4MjhlMGM5"
        },
        "to_address": {
          "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "770",
          "company": null,
          "street1": "770 EASTERN PKWY",
          "street2": null,
          "city": "BROOKLYN",
          "state": "NY",
          "zip": "11213-3409",
          "country": "US",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 40.66923,
                "longitude": -73.94287,
                "time_zone": "America/New_York"
              }
            }
          }
        },
        "usps_zone": null,
        "return_address": {
          "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "GEULAH SUPPLIES",
          "company": null,
          "street1": "49 ESTHER CRES",
          "street2": null,
          "city": "VAUGHAN",
          "state": "ON",
          "zip": "L4J 3J8",
          "country": "CA",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 43.79744,
                "longitude": -79.44365,
                "time_zone": "America/Toronto"
              }
            }
          }
        },
        "buyer_address": {
          "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
          "object": "Address",
          "created_at": "2022-07-05T19:51:37+00:00",
          "updated_at": "2022-07-05T19:51:37+00:00",
          "name": "770",
          "company": null,
          "street1": "770 EASTERN PKWY",
          "street2": null,
          "city": "BROOKLYN",
          "state": "NY",
          "zip": "11213-3409",
          "country": "US",
          "phone": "4164197990",
          "email": "YAAKOV@GEULAH.CA",
          "mode": "test",
          "carrier_facility": null,
          "residential": false,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {
            "delivery": {
              "success": true,
              "errors": [],
              "details": {
                "latitude": 40.66923,
                "longitude": -73.94287,
                "time_zone": "America/New_York"
              }
            }
          }
        },
        "object": "Shipment",
        "_internal": {
          "id": 4071002667,
          "public_id": "shp_9ab265562bd44e85a30d4c733cdf9b81",
          "insurance_value_usd": null,
          "user": {
            "id": 3757789,
            "public_id": "user_d1674b7976844fe596616926c7650cd4",
            "object": "User",
            "parent_id": null,
            "billing_user_id": 3757789,
            "name": "Jacob Gryn",
            "email": "easypost@co4.com",
            "phone_number": "416-419-7990",
            "balance": "$0.00000",
            "price_per_shipment": "0.00000",
            "disabled": false,
            "disabled_at": null,
            "created_at": "2022-03-21T17:54:10Z",
            "updated_at": "2022-03-21T17:54:50Z",
            "watch": false,
            "source": null,
            "stripe_customer": null,
            "user_flag": {
              "id": 228411
            }
          },
          "user_id": 3757789,
          "batch_id": null,
          "to_address": {
            "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "770",
            "company": null,
            "street1": "770 EASTERN PKWY",
            "street2": null,
            "city": "BROOKLYN",
            "state": "NY",
            "zip": "11213-3409",
            "country": "US",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": false,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": "C012",
                  "latitude": 40.66923,
                  "longitude": -73.94287,
                  "time_zone": "America/New_York"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629416,
              "public_id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "to_address_id": 12850629416,
          "from_address": {
            "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "GEULAH SUPPLIES",
            "company": null,
            "street1": "49 ESTHER CRES",
            "street2": null,
            "city": "VAUGHAN",
            "state": "ON",
            "zip": "L4J 3J8",
            "country": "CA",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": null,
                  "latitude": 43.79744,
                  "longitude": -79.44365,
                  "time_zone": "America/Toronto"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629365,
              "public_id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "from_address_id": 12850629365,
          "return_address": {
            "id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "GEULAH SUPPLIES",
            "company": null,
            "street1": "49 ESTHER CRES",
            "street2": null,
            "city": "VAUGHAN",
            "state": "ON",
            "zip": "L4J 3J8",
            "country": "CA",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": null,
                  "latitude": 43.79744,
                  "longitude": -79.44365,
                  "time_zone": "America/Toronto"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629365,
              "public_id": "adr_e18eaf0afc9b11ecac0bac1f6bc7b362",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "return_address_id": 12850629365,
          "buyer_address": {
            "id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
            "object": "Address",
            "created_at": "2022-07-05T19:51:37+00:00",
            "updated_at": "2022-07-05T19:51:37+00:00",
            "name": "770",
            "company": null,
            "street1": "770 EASTERN PKWY",
            "street2": null,
            "city": "BROOKLYN",
            "state": "NY",
            "zip": "11213-3409",
            "country": "US",
            "phone": "4164197990",
            "email": "YAAKOV@GEULAH.CA",
            "mode": "test",
            "carrier_facility": null,
            "residential": false,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [
              {
                "id": null,
                "address_id": null,
                "name": "delivery",
                "success": true,
                "results": null,
                "created_at": null,
                "updated_at": null,
                "details": {
                  "carrier_route": "C012",
                  "latitude": 40.66923,
                  "longitude": -73.94287,
                  "time_zone": "America/New_York"
                },
                "user_id": null
              }
            ],
            "_internal": {
              "id": 12850629416,
              "public_id": "adr_e1b2ef41fc9b11eca4ccac1f6bc72124",
              "user_id": 3757789,
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              }
            }
          },
          "buyer_address_id": 12850629416,
          "selected_rate": "rate_1aacdf12006c44d081895212e50e8a45",
          "rates": [],
          "postage_label": {
            "id": 1522669701,
            "object": "PostageLabel",
            "public_id": "pl_3d98f85619fa4606a540bc580dfe4e9a",
            "mode": "test",
            "user": {
              "id": 3757789,
              "public_id": "user_d1674b7976844fe596616926c7650cd4",
              "object": "User",
              "parent_id": null,
              "billing_user_id": 3757789,
              "name": "Jacob Gryn",
              "email": "easypost@co4.com",
              "phone_number": "416-419-7990",
              "balance": "$0.00000",
              "price_per_shipment": "0.00000",
              "disabled": false,
              "disabled_at": null,
              "created_at": "2022-03-21T17:54:10Z",
              "updated_at": "2022-03-21T17:54:50Z",
              "watch": false,
              "source": null,
              "stripe_customer": null,
              "user_flag": {
                "id": 228411
              }
            },
            "user_id": 3757789,
            "created_at": "2022-07-05T19:52:04Z",
            "updated_at": "2022-07-05T19:52:04Z",
            "date_advance": 0,
            "integrated_form": "none",
            "label_date": "2022-07-05T19:52:04Z",
            "label_size": "4x7",
            "url": "https://easypost-files.s3.us-west-2.amazonaws.com/files/postage_label/20220705/6161a43814ce4ed3aeda8ea30eea27fc.png",
            "pdf_url": null,
            "zpl_url": null,
            "epl2_url": null,
            "rate_id": "rate_1aacdf12006c44d081895212e50e8a45",
            "selected_rate": "rate_1aacdf12006c44d081895212e50e8a45"
          },
          "postage_label_id": 1522669701,
          "carrier_account_id": 7900405,
          "parcel": {
            "id": "prcl_24545661111947f4ac14ada2181b1e39",
            "object": "Parcel",
            "created_at": "2022-07-05T19:51:39Z",
            "updated_at": "2022-07-05T19:51:39Z",
            "length": 10,
            "width": 10,
            "height": 10,
            "predefined_package": null,
            "weight": 528,
            "mode": "test",
            "_internal": {
              "id": 4073431182,
              "public_id": "prcl_24545661111947f4ac14ada2181b1e39",
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              },
              "user_id": 3757789
            }
          },
          "parcel_id": 4073431182,
          "insurance_id": null,
          "customs_info": {
            "id": "cstinfo_6f425a0a7464492eb938187dd2b1fd8b",
            "object": "CustomsInfo",
            "created_at": "2022-07-05T19:51:38Z",
            "updated_at": "2022-07-05T19:51:38Z",
            "contents_explanation": null,
            "contents_type": "merchandise",
            "customs_certify": true,
            "customs_signer": null,
            "eel_pfc": "NOEEI 30.37(a)",
            "non_delivery_option": "return",
            "restriction_comments": null,
            "restriction_type": "none",
            "mode": "test",
            "declaration": null,
            "customs_items": [
              {
                "id": "cstitem_ce3830520f4947e5839ec356516c0403",
                "object": "CustomsItem",
                "created_at": "2022-07-05T19:51:38Z",
                "updated_at": "2022-07-05T19:51:38Z",
                "description": "Ignore",
                "hs_tariff_number": null,
                "origin_country": "US",
                "quantity": 1,
                "value": "0.0",
                "weight": 0.001,
                "code": null,
                "mode": "test",
                "manufacturer": null,
                "currency": null,
                "eccn": null,
                "printed_commodity_identifier": null
              }
            ],
            "_internal": {
              "id": 853495193,
              "public_id": "cstinfo_6f425a0a7464492eb938187dd2b1fd8b",
              "user": {
                "id": 3757789,
                "public_id": "user_d1674b7976844fe596616926c7650cd4",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 3757789,
                "name": "Jacob Gryn",
                "email": "easypost@co4.com",
                "phone_number": "416-419-7990",
                "balance": "$0.00000",
                "price_per_shipment": "0.00000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2022-03-21T17:54:10Z",
                "updated_at": "2022-03-21T17:54:50Z",
                "watch": false,
                "source": null,
                "stripe_customer": null,
                "user_flag": {
                  "id": 228411
                }
              },
              "user_id": 3757789,
              "customs_items": [
                {
                  "id": 1018453274,
                  "object": "CustomsItem",
                  "created_at": "2022-07-05T19:51:38Z",
                  "updated_at": "2022-07-05T19:51:38Z",
                  "description": "Ignore",
                  "hs_tariff_number": null,
                  "origin_country": "US",
                  "quantity": 1,
                  "value": "0.0",
                  "weight": 0.001,
                  "code": null,
                  "mode": "test",
                  "manufacturer": null,
                  "currency": null,
                  "eccn": null,
                  "printed_commodity_identifier": null,
                  "public_id": "cstitem_ce3830520f4947e5839ec356516c0403",
                  "user": {
                    "id": 3757789,
                    "public_id": "user_d1674b7976844fe596616926c7650cd4",
                    "object": "User",
                    "parent_id": null,
                    "billing_user_id": 3757789,
                    "name": "Jacob Gryn",
                    "email": "easypost@co4.com",
                    "phone_number": "416-419-7990",
                    "balance": "$0.00000",
                    "price_per_shipment": "0.00000",
                    "disabled": false,
                    "disabled_at": null,
                    "created_at": "2022-03-21T17:54:10Z",
                    "updated_at": "2022-03-21T17:54:50Z",
                    "watch": false,
                    "source": null,
                    "stripe_customer": null,
                    "user_flag": {
                      "id": 228411
                    }
                  },
                  "user_id": 3757789
                }
              ]
            }
          },
          "customs_info_id": 853495193,
          "scan_form": null,
          "scan_form_id": null,
          "tracker": {
            "id": "trk_8adae0aaaaeb474782fc78028828e0c9",
            "object": "Tracker",
            "mode": "test",
            "tracking_code": "1Z6F82W96892263960",
            "status": "delivered",
            "status_detail": "arrived_at_destination",
            "created_at": "2022-07-05T19:52:05Z",
            "updated_at": "2022-07-05T19:55:05Z",
            "signed_by": "John Tester",
            "weight": 17.6,
            "est_delivery_date": "2022-07-05T19:55:05Z",
            "shipment_id": "shp_9ab265562bd44e85a30d4c733cdf9b81",
            "carrier": "UPS",
            "tracking_details": [
              {
                "object": "TrackingDetail",
                "message": "BILLING INFORMATION RECEIVED",
                "description": null,
                "status": "pre_transit",
                "status_detail": "status_update",
                "datetime": "2022-06-06T10:19:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": null,
                  "state": null,
                  "country": null,
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "ORIGIN SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "arrived_at_facility",
                "datetime": "2022-06-06T10:43:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SOUTH SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "DEPARTURE SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "departed_facility",
                "datetime": "2022-06-07T04:46:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SOUTH SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "ARRIVAL SCAN",
                "description": null,
                "status": "in_transit",
                "status_detail": "arrived_at_facility",
                "datetime": "2022-06-08T05:26:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "OUT FOR DELIVERY",
                "description": null,
                "status": "out_for_delivery",
                "status_detail": "out_for_delivery",
                "datetime": "2022-06-09T04:05:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              },
              {
                "object": "TrackingDetail",
                "message": "DELIVERED",
                "description": null,
                "status": "delivered",
                "status_detail": "arrived_at_destination",
                "datetime": "2022-06-09T11:28:05Z",
                "source": "UPS",
                "carrier_code": null,
                "tracking_location": {
                  "object": "TrackingLocation",
                  "city": "SAN FRANCISCO",
                  "state": "CA",
                  "country": "US",
                  "zip": null
                }
              }
            ],
            "carrier_detail": {
              "object": "CarrierDetail",
              "service": "2ND DAY AIR",
              "container_type": null,
              "est_delivery_date_local": null,
              "est_delivery_time_local": null,
              "origin_location": "SOUTH SAN FRANCISCO CA, US",
              "origin_tracking_location": {
                "object": "TrackingLocation",
                "city": "SOUTH SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              },
              "destination_location": "SAN FRANCISCO CA US, 94105",
              "destination_tracking_location": {
                "object": "TrackingLocation",
                "city": "SAN FRANCISCO",
                "state": "CA",
                "country": "US",
                "zip": null
              },
              "guaranteed_delivery_date": null,
              "alternate_identifier": null,
              "initial_delivery_attempt": "2022-06-09T11:28:05Z"
            },
            "finalized": true,
            "is_return": false,
            "public_url": "https://track.easypost.com/djE6dHJrXzhhZGFlMGFhYWFlYjQ3NDc4MmZjNzgwMjg4MjhlMGM5",
            "fees": []
          },
          "tracker_id": "trk_8adae0aaaaeb474782fc78028828e0c9",
          "order_id": 409550905,
          "refund": null,
          "refund_id": null,
          "forms": [
            {
              "id": 42502708,
              "public_id": "form_3130f311d8534853bc455519c703ce3c",
              "form_type": "commercial_invoice",
              "source": "carrier"
            }
          ],
          "fees": []
        },
        "rates": [],
        "forms": [
          {
            "object": "Form",
            "created_at": "2022-07-05T19:52:04Z",
            "updated_at": "2022-07-05T19:52:04Z",
            "mode": "test",
            "form_type": "commercial_invoice",
            "form_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/form/20220705/28822c6bd51f498b8e1629ee8b220ed8.pdf",
            "submitted_electronically": true,
            "id": "form_3130f311d8534853bc455519c703ce3c"
          }
        ],
        "fees": [],
        "id": "shp_9ab265562bd44e85a30d4c733cdf9b81"
      }
    ]
  }
)

// Delete order address data
delete data.to_address.id;
delete data.to_address.mode;
delete data.to_address.verifications;
delete data.to_address.updated_at;
delete data.to_address.created_at;
delete data.to_address.carrier_facility;
delete data.to_address.state_tax_id;
delete data.to_address.federal_tax_id;
delete data.from_address.id;
delete data.from_address.mode;
delete data.from_address.verifications;
delete data.from_address.created_at;
delete data.from_address.updated_at;
delete data.from_address.state_tax_id;
delete data.from_address.federal_tax_id;

// Delete all shipment id's, usps_zone's, tracker's, and parcel's
for (let i = 0; i < data.shipments.length; i++) {
  delete data.shipments[i].id;
  delete data.shipments[i].state_tax_id;
  delete data.shipments[i].federal_tax_id;
  delete data.shipments[i].usps_zone;
  delete data.shipments[i].order_id;
  delete data.shipments[i].tracker;
  delete data.shipments[i].to_address.id;
  delete data.shipments[i].from_address.id;
  delete data.shipments[i].buyer_address.id;
  delete data.shipments[i].return_address.id;
  delete data.shipments[i].parcel.id;
  delete data.shipments[i].parcel.created_at;
  delete data.shipments[i].parcel.mode;
  delete data.shipments[i].parcel.updated_at;
  if (data.shipments[i].parcel.predefined_package === null) {
    delete data.shipments[i].parcel.predefined_package;
  }

  // Delete all shipments customs data
  if (data.shipments[i].customs_info) {
    delete data.shipments[i].customs_info.id;
    delete data.shipments[i].customs_info.mode;
    delete data.shipments[i].customs_info.created_at;
    delete data.shipments[i].customs_info.updated_at;
    for (
      let ii = 0;
      ii < data.shipments[i].customs_info.customs_items.length;
      ii++
    ) {
      delete data.shipments[i].customs_info.customs_items[ii].id;
      delete data.shipments[i].customs_info.customs_items[ii].mode;
      delete data.shipments[i].customs_info.customs_items[ii].created_at;
      delete data.shipments[i].customs_info.customs_items[ii].updated_at;
      delete data.shipments[i].customs_info.customs_items[ii].currency;
    }
  }
}

// data.to_address.federal_tax_id = 'IE123456789000'
// data.from_address.federal_tax_id = 'GB123456789000'

// Recreate the order
const order = new api.Order({
  to_address: data.to_address,
  from_address: data.from_address,
  shipments: data.shipments,
  options: data.options,
  // carrier_accounts: [{ id: process.env.UPS }],
  carrier_accounts: [ {"id":"ca_dc32896416914a3fb8fee2058f1d0362"}]
});

// Print the results to console
order
  .save()
  .then(console.log)
  .catch((e) => {
    console.log(JSON.stringify(e));
  });
