build:
	rm -rf ../../solekubi.github.io/pkg/lebao_wasm/*
	wasm-pack build --no-typescript --scope solekubi -d ../../solekubi.github.io/pkg/lebao_wasm/
	rm ../../solekubi.github.io/pkg/lebao_wasm/.gitignore