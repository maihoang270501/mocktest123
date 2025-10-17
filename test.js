describe("MockTest Data Fetch", function() {
    it("should render correct number of questions", function() {
        // Giả lập dữ liệu
        const questions = [
            { question: "Câu hỏi 1", answer: "Câu trả lời 1" },
            { question: "Câu hỏi 2", answer: "Câu trả lời 2" }
        ];

        // Gọi hàm renderQuestions để kiểm tra
        const container = document.createElement("div");
        renderQuestions(questions, container);

        // Kiểm tra rằng có đúng số lượng câu hỏi được render
        expect(container.querySelectorAll(".faq-item").length).toBe(2);
    });

    it("should show error message when fetch fails", function() {
        // Giả lập lỗi fetch
        spyOn(window, "fetch").and.returnValue(Promise.reject("Fetch failed"));

        const container = document.createElement("div");
        fetchQuestions(container);

        // Kiểm tra xem thông báo lỗi có xuất hiện không
        setTimeout(() => {
            const errorMessage = container.querySelector("p");
            expect(errorMessage.textContent).toBe("Có lỗi xảy ra khi tải dữ liệu.");
        }, 1000);
    });

    it("should show empty state when no data is available", function() {
        // Dữ liệu rỗng
        const questions = [];
        const container = document.createElement("div");

        // Gọi hàm renderQuestions để kiểm tra
        renderQuestions(questions, container);

        // Kiểm tra thông báo "Không có câu hỏi nào để hiển thị."
        const emptyMessage = container.querySelector("p");
        expect(emptyMessage.textContent).toBe("Không có câu hỏi nào để hiển thị.");
    });
});
