async function runWebAssembly() {
  // Завантаження WebAssembly
  const response = await fetch('simple.wasm'); // Завантаження файлу .wasm
  const buffer = await response.arrayBuffer(); // Перетворення на буфер
  const wasmModule = await WebAssembly.instantiate(buffer); // Ініціалізація

  // Виклик функції addNumbers
  const result = wasmModule.instance.exports.addNumbers(10, 20); // Виклик функції
  console.log(`Результат: ${result}`); // Результат: 30

  document.getElementById('wasmOutput').textContent = `Результат: ${result}`;
}

document.getElementById('runWasm').addEventListener('click', runWebAssembly);
