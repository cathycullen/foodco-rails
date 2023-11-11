require "test_helper"

class ProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get products_url, as: :json
    assert_response :success
  end

  test "should create product" do
    assert_difference("Product.count") do
      post products_url, params: { product: { description: @product.description, discounted_price: @product.discounted_price, image_descr: @product.image_descr, ingredients: @product.ingredients, item_category: @product.item_category, name: @product.name, original_price: @product.original_price, pickkup_time: @product.pickkup_time, pickup_date: @product.pickup_date, qty_available: @product.qty_available, rating: @product.rating, store_id: @product.store_id, suprise: @product.suprise } }, as: :json
    end

    assert_response :created
  end

  test "should show product" do
    get product_url(@product), as: :json
    assert_response :success
  end

  test "should update product" do
    patch product_url(@product), params: { product: { description: @product.description, discounted_price: @product.discounted_price, image_descr: @product.image_descr, ingredients: @product.ingredients, item_category: @product.item_category, name: @product.name, original_price: @product.original_price, pickkup_time: @product.pickkup_time, pickup_date: @product.pickup_date, qty_available: @product.qty_available, rating: @product.rating, store_id: @product.store_id, suprise: @product.suprise } }, as: :json
    assert_response :success
  end

  test "should destroy product" do
    assert_difference("Product.count", -1) do
      delete product_url(@product), as: :json
    end

    assert_response :no_content
  end
end
