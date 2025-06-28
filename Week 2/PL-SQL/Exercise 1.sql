-- Scenario 1
BEGIN
    FOR cust IN (SELECT c.CustomerID, l.LoanID, l.InterestRate, c.DOB
                 FROM Customers c
                 JOIN Loans l ON c.CustomerID = l.CustomerID) LOOP
        IF MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12 > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = cust.LoanID;
        END IF;
    END LOOP;
END;
/

-- Scenario 2

ALTER TABLE Customers ADD IsVIP VARCHAR2(5);

BEGIN
    FOR cust IN (SELECT CustomerID, Balance FROM Customers) LOOP
        IF cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;
        END IF;
    END LOOP;
END;
/


-- Scenario 3

BEGIN
    FOR loan IN (SELECT l.LoanID, c.Name, l.EndDate
                 FROM Loans l
                 JOIN Customers c ON l.CustomerID = c.CustomerID
                 WHERE l.EndDate <= SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID || ' for ' || loan.Name || ' is due on ' || TO_CHAR(loan.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/

