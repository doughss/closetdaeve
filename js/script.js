// Script para carregar imagens da web para o Closet da Eve

document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando carregamento de imagens...');

    // Carregar logo
    const logoImages = document.querySelectorAll('img[src="images/logo.png"]');
    logoImages.forEach(img => {
        img.src = 'https://via.placeholder.com/150x80/ff69b4/ffffff?text=Closet+da+Eve';
    });

    // Carregar imagens dos produtos em destaque
    const featuredImages = {
        'images/product1.jpg': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/product2.jpg': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/product3.jpg': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    };

    // Carregar logos das marcas
    const brandLogos = {
        'images/farm-logo.png': 'https://www.farmrio.com.br/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fdeco-sites-assets.s3.sa-east-1.amazonaws.com%2Ffarmrio%2F13206080-1314-4ea2-8421-44cc11851e18%2Flogo.svg&fit=cover&width=244&height=50',
        'images/animale-logo.png': 'https://bobagsprod.s3.sa-east-1.amazonaws.com/uploads/static/5ffa3352150041e23c07a01af7f7dfad9deca99f.png',
        'images/arezzo-logo.png': 'https://logodownload.org/wp-content/uploads/2019/09/arezzo-logo-1.png',
    };

    // Carregar imagens de roupas
    const clothesImages = {
        'images/clothes1.jpg': 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/clothes2.jpg': 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/clothes3.jpg': 'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/clothes4.jpg': 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    };

    // Carregar imagens de sapatos
    const shoesImages = {
        'images/shoes1.jpg': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/shoes2.jpg': 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/shoes3.jpg': 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/shoes4.jpg': 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    };

    // Carregar imagens de bolsas
    const bagImages = {
        'images/bag1.jpg': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/bag2.jpg': 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/bag3.jpg': 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
        'images/bag4.jpg': 'https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    };

    // Imagem da loja
    const storeImage = {
        'images/store.jpg': 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
    };

    // Função melhorada para substituir as imagens com verificação de erros
    function replaceImages(imageMap) {
        try {
            for (const [src, newSrc] of Object.entries(imageMap)) {
                const images = document.querySelectorAll(`img[src="${src}"]`);
                if (images.length > 0) {
                    images.forEach(img => {
                        // Criar nova imagem para pré-carregar
                        const tempImg = new Image();
                        tempImg.onload = function() {
                            img.src = newSrc;
                        };
                        tempImg.onerror = function() {
                            // Usar placeholder se a nova imagem falhar
                            img.src = 'https://via.placeholder.com/400x400/cccccc/666666?text=Imagem+Indisponível';
                        };
                        tempImg.src = newSrc;
                    });
                }
            }
        } catch (error) {
            console.error('Erro ao substituir imagens:', error);
        }
    }

    // Adicionar timeout para evitar bloqueio
    setTimeout(() => {
        try {
            // Substituir todas as imagens
            replaceImages(featuredImages);
            replaceImages(brandLogos);
            replaceImages(clothesImages);
            replaceImages(shoesImages);
            replaceImages(bagImages);
            replaceImages(storeImage);

            // Adicionar classe para melhorar a aparência das imagens
            const allImages = document.querySelectorAll('img');
            allImages.forEach(img => {
                img.classList.add('img-responsive');
                img.addEventListener('error', function() {
                    this.src = 'https://via.placeholder.com/400x400/cccccc/666666?text=Imagem+Indisponível';
                });
            });

            console.log('Todas as imagens foram processadas!');
        } catch (error) {
            console.error('Erro durante o carregamento das imagens:', error);
        }
    }, 100);
});