import { getItemHTML, getMagnet } from "./data.utils";

jest.mock("axios");
import axios from "axios";

const mockData = {
    guid: "321",
    categoryId: "1_4",
    hash: "123",
    category: "Anime Translated",
    size: "20gb",
};

const magnetClass = "card-footer-item";

const htmlMock = {
    data: `
        <html>
            <body>
                <a href="magnet" class="${magnetClass}">magnet</a>
            </body
        </html>
    `,
};

describe("Data utility", () => {
    describe("getItemHTML function", () => {
        it("Should return a feed item", async () => {
            expect.assertions(1);

            axios.get = jest.fn().mockResolvedValue(htmlMock);

            const feedItem = await getItemHTML(mockData);
            expect(feedItem).toStrictEqual(htmlMock);
        });
    });

    describe("getMagnet function", () => {
        it("Should return the magnet from the HTML body", async () => {
            expect.assertions(1);

            const magnet = await getMagnet(new Promise((res) => res(htmlMock)));
            expect(magnet).toStrictEqual("magnet");
        });

        // it("Should return null if magnet not found", async () => {
        // });
    });
});
