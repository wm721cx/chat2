document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.chat-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.dataset.message;
            sendMessage(message);
        });
    });

    function sendMessage(message) {
        // هنا يمكنك إضافة الشيفرة الخاصة بإرسال الرسالة
        console.log('Sending message:', message);
    }
});