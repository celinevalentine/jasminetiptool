describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function() {

        serverNameInput.value = "Alice";
    });

    it("should add a new server to allServers on submitServerInfo()", function() {

        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual("Alice");
    });
    it("should not a new server to allServers on submitServerInfo() with an empty string", function() {
        serverNameInput.value = "";
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(0);

    });
    it("should create table to updateServerTable()", function() {
        submitServerInfo();
        updateServerTable();

        let currentTd = document.querySelectorAll("#serverTable tbody tr td")

        expect(currentTd.length).toEqual(3);
        expect(currentTd[0].innerText).toEqual("Alice");
        expect(currentTd[1].innerText).toEqual("$0.00");
        expect(currentTd[2].innerText).toEqual("X");

    });

    afterEach(function() {
        // teardown logic
        allServers = {};
        serverId = 0;
        serverTbody.innerHTML = "";

    });
});