
import { expect, test } from "../fixtures/books-fixtures";

test('search book & open details', async ({ books, page}) => {
    const firstTitle = await books.rows.first().locator('a').innerText();
    await books.searchBox(firstTitle.split(' ')[0]);

    await books.clickFirstBook();

    const urlIsbn = new URL(page.url()).searchParams.get('book')!;
    
    await expect(page).toHaveURL(new RegExp(`/books\\?book=${urlIsbn}$`));

    
    const bookResponse = await page.waitForResponse(
        r => r.url().includes(`/BookStore/v1/Book?ISBN=${urlIsbn}`) && r.ok()
    );
    const body = await bookResponse.json();
    expect(body.isbn).toBe(urlIsbn);
});