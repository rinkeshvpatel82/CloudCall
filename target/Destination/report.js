$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/ProductAddToBasket.feature");
formatter.feature({
  "line": 2,
  "name": "As User I want to Add product to Basket and remove from Basket successfully",
  "description": "",
  "id": "as-user-i-want-to-add-product-to-basket-and-remove-from-basket-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestCase1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I should be able to verify Add to your Basket successfully",
  "description": "",
  "id": "as-user-i-want-to-add-product-to-basket-and-remove-from-basket-successfully;i-should-be-able-to-verify-add-to-your-basket-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@TestCase2"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I accepts the cookie banner",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify shopping basket is empty",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browses product",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I able to select the product \"\u003cproductNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get product name\"\u003cexpectedProductName\u003e\" with other product information",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I selected product size \"\u003cproductSize\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Add to your basket Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I am able to navigate to basketPage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should get product with \"\u003cexpectedProductNameAndSize\u003e\" Name and size",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I selects multiple \"\u003cproductQuantity\u003e\"quantities",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get product with \"\u003cexpectedProductQuantity\u003e\" Quantity",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am able to deletes added product from basket",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "as-user-i-want-to-add-product-to-basket-and-remove-from-basket-successfully;i-should-be-able-to-verify-add-to-your-basket-successfully;",
  "rows": [
    {
      "cells": [
        "productNumber",
        "expectedProductName",
        "productSize",
        "productQuantity",
        "expectedProductNameAndSize",
        "expectedProductQuantity"
      ],
      "line": 24,
      "id": "as-user-i-want-to-add-product-to-basket-and-remove-from-basket-successfully;i-should-be-able-to-verify-add-to-your-basket-successfully;;1"
    },
    {
      "cells": [
        "0",
        "John Lewis \u0026 Partners Supima Cotton Fine Stripe T-Shirt, Grey Melange",
        "XL",
        "4",
        "John Lewis \u0026 Partners Supima Cotton Fine Stripe T-Shirt, Grey Melange, XL",
        "4"
      ],
      "line": 25,
      "id": "as-user-i-want-to-add-product-to-basket-and-remove-from-basket-successfully;i-should-be-able-to-verify-add-to-your-basket-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11559909800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on JohnLewis Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.i_am_on_JohnLewis_Home_Page()"
});
formatter.result({
  "duration": 784810500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I should be able to verify Add to your Basket successfully",
  "description": "",
  "id": "as-user-i-want-to-add-product-to-basket-and-remove-from-basket-successfully;i-should-be-able-to-verify-add-to-your-basket-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@TestCase2"
    },
    {
      "line": 1,
      "name": "@TestCase1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I accepts the cookie banner",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify shopping basket is empty",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browses product",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I able to select the product \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get product name\"John Lewis \u0026 Partners Supima Cotton Fine Stripe T-Shirt, Grey Melange\" with other product information",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I selected product size \"XL\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Add to your basket Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I am able to navigate to basketPage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I should get product with \"John Lewis \u0026 Partners Supima Cotton Fine Stripe T-Shirt, Grey Melange, XL\" Name and size",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I selects multiple \"4\"quantities",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should get product with \"4\" Quantity",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I am able to deletes added product from basket",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_accepts_the_cookie_banner()"
});
formatter.result({
  "duration": 10464522500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iVerifyShoppingBasketIsEmpty()"
});
formatter.result({
  "duration": 3492546700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iBrowsesProduct()"
});
formatter.result({
  "duration": 4008351500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    }
  ],
  "location": "StepDefs.i_able_to_select_the_product(int)"
});
formatter.result({
  "duration": 4001193800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Lewis \u0026 Partners Supima Cotton Fine Stripe T-Shirt, Grey Melange",
      "offset": 26
    }
  ],
  "location": "StepDefs.i_should_get_product_name_with_other_product_information(String)"
});
formatter.result({
  "duration": 135518400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XL",
      "offset": 25
    }
  ],
  "location": "StepDefs.iSelectedProductSize(String)"
});
formatter.result({
  "duration": 491441600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iClickOnAddToYourBasketButton()"
});
formatter.result({
  "duration": 432588700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iAmAbleToNavigateToBasketPage()"
});
formatter.result({
  "duration": 2937825100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Lewis \u0026 Partners Supima Cotton Fine Stripe T-Shirt, Grey Melange, XL",
      "offset": 27
    }
  ],
  "location": "StepDefs.iShouldGetProductWithNameAndSize(String)"
});
formatter.result({
  "duration": 241883400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "StepDefs.iSelectsMultipleQuantities(int)"
});
formatter.result({
  "duration": 988391700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "StepDefs.iShouldGetProductWithQuantity(String)"
});
formatter.result({
  "duration": 141326200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_am_able_to_deletes_added_product_from_basket()"
});
formatter.result({
  "duration": 353720700,
  "status": "passed"
});
formatter.after({
  "duration": 2097681000,
  "status": "passed"
});
});