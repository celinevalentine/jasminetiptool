describe("helpers test with set up and tear down", function() {

            beforeEach(function() {
                billAmtInput.value = "$100";
                tipAmtInput.value = "20";

            });

            it("should test sumPaymentTotal()", function() {
                sumPaymentTotal(type);
                expect(allPayments["billAmt"]).toEqual("$100");
                expect(allPayments["tipAmt"]).toEqual("$20");





            });
            it("should test calculateTipPercent()", function() {

                calculateTipPercent();



            });
            it("should test appendTD()", function() {
                appendTd();




            });

            afterEach(function() {





            });