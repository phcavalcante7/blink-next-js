-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Camiseta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "estoque" JSONB NOT NULL,
    "slug" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "Camiseta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagemCamiseta" (
    "id" SERIAL NOT NULL,
    "imagemUrl" TEXT NOT NULL,
    "camisetaId" INTEGER NOT NULL,

    CONSTRAINT "ImagemCamiseta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(8,2) NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "stripeSessionId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pendente',

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "camisetaId" INTEGER NOT NULL,
    "modelo" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "precoUnitario" DECIMAL(6,2) NOT NULL,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Camiseta_slug_key" ON "Camiseta"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_stripeSessionId_key" ON "Pedido"("stripeSessionId");

-- AddForeignKey
ALTER TABLE "Camiseta" ADD CONSTRAINT "Camiseta_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemCamiseta" ADD CONSTRAINT "ImagemCamiseta_camisetaId_fkey" FOREIGN KEY ("camisetaId") REFERENCES "Camiseta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_camisetaId_fkey" FOREIGN KEY ("camisetaId") REFERENCES "Camiseta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
