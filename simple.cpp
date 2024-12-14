#include <iostream>

// Оголошення функції, яка буде викликана з JavaScript
extern "C" {
    int addNumbers(int a, int b) {
        return a + b;
    }
}

// Можна залишити main для тестування у середовищі командного рядка або при компіляції в іншому середовищі
int main() {
    int res = addNumbers(32, 33); // 65
    std::cout << res << std::endl;
    return 0;
}
