describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
    it('Does not do much!', () => {
        expect(false).to.equal(false)
      })
  });

  describe("End to End test of calculator", () => {
    it("7 + 8 = 15", () => {
    // Arrange
    cy.visit("http://127.0.0.1:5501/index.html");

    // Act
    
    cy.get("[data-cy=seven]").click()
    cy.get("[data-cy=plus]").click();
    cy.get("[data-cy=eight]").click();
    cy.get("[data-cy=equals]").click();

    // Assert
    cy.get("[data-cy=display]").should("have.text", "15");
    });
    it("2 x 4 = 8", () => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html");
    
        // Act
        
        cy.get("[data-cy=two]").click()
        cy.get("[data-cy=times]").click();
        cy.get("[data-cy=four]").click();
        cy.get("[data-cy=equals]").click();
    
        // Assert
        cy.get("[data-cy=display]").should("have.text", "8");
        });
    it("2 x 4 = 8", () => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html");
    
        // Act
        
        cy.get("[data-cy=two]").click()
        cy.get("[data-cy=times]").click();
        cy.get("[data-cy=four]").click();
        cy.get("[data-cy=equals]").click();
    
        // Assert
        cy.get("[data-cy=display]").should("have.text", "8");
    });
    it("6 - 3 = -3", () => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html");
    
        // Act
        
        cy.get("[data-cy=three]").click()
        cy.get("[data-cy=minus]").click();
        cy.get("[data-cy=six]").click();
        cy.get("[data-cy=equals]").click();
    
        // Assert
        cy.get("[data-cy=display]").should("have.text", "-3");
    });
    it("1 ÷ 5 = 0.2", () => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html");
    
        // Act
        
        cy.get("[data-cy=one]").click()
        cy.get("[data-cy=divide]").click();
        cy.get("[data-cy=five]").click();
        cy.get("[data-cy=equals]").click();
    
        // Assert
        cy.get("[data-cy=display]").should("have.text", "0.2");
        });
  });