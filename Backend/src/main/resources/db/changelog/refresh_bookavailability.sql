CREATE OR REPLACE FUNCTION refresh_bookavailability()
    RETURNS TRIGGER AS '
    BEGIN
        EXECUTE ''CREATE OR REPLACE VIEW bookavailability AS SELECT
                book.id,
                book.title,
                book.author,
                book.published_date,
                book.publisher,
                book.description,
                book.industry_identifiers,
                SUM(CASE WHEN copy.availability = true THEN 1 ELSE 0 END) AS nb_available,
                (SELECT COUNT(*) FROM copy WHERE copy.book_id = book.id) AS nb_total
            FROM
                book
                    LEFT JOIN copy ON book.id = copy.book_id
            GROUP BY book.id, book.title, book.author, book.published_date,book.author,book.publisher, book.description, book.industry_identifiers;'';
            RETURN NULL;
            END;
            ' LANGUAGE plpgsql;
