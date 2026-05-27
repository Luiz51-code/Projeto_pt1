-- DropForeignKey
ALTER TABLE `pedido` DROP FOREIGN KEY `pedido_usuarioId_fkey`;

-- DropIndex
DROP INDEX `pedido_usuarioId_fkey` ON `pedido`;

-- AddForeignKey
ALTER TABLE `pedido` ADD CONSTRAINT `pedido_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
