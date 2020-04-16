describe("helpers test with set up and tear down", function() {

    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

    });

    it("should test total of tip amount on sumPaymentTotal()", function() {
        expect(sumPaymentTotal("tipAmt")).toEqual(20);

        billAmtInput.value = 120;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal("tipAmt")).toEqual(40);

    });
    it("should test total of bill amount on sumPaymentTotal()", function() {
        expect(sumPaymentTotal("billAmt")).toEqual(100);

        billAmtInput.value = 120;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("billAmt")).toEqual(220);

    });
    it("should test calculateTipPercent()", function() {

        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(180, 20)).toEqual(11);
    });
    it("should test appendTd(tr, value)", function() {
        let newTr = document.createElement("tr");
        appendTd(newTr, "test");
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual("test");
    });
    it("should delete button and click handler on appendDeleteBtn(tr, type)", function() {
        let newTr = document.createElement("tr");

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual("X");

    });

    afterEach(function() {

        allPayments = {};
        paymentId = 0;
        billAmtInput.value = "";
        tipAmtInput.value = "";
        serverTbody.innerHTML = "";
        summaryTds[0].HTML = "";
        summaryTds[1].HTML = "";
        summaryTds[2].HTML = "";
        paymentTbody.innerHTML = "";
    });
});