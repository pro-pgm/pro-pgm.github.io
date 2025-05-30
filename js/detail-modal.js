$(function() {
    // 处理详情链接点击
    $(document).on('click', '.detail-link', function(e) {
        // 检查是否在模态框中
        var isInModal = $(this).closest('.portfolio-modal').length > 0;
        
        if (isInModal) {
            // 在模态框中的处理
            e.preventDefault();
            var page = $(this).data('page');
            var modalId = 'detailModal-' + Math.random().toString(36).substr(2, 9);
            
            $.get(page, function(content) {
                var detailModal = $('<div>').addClass('modal fade detail-modal')
                    .attr({
                        'id': modalId,
                        'role': 'dialog',
                        'aria-labelledby': modalId + 'Label',
                        'tabindex': '-1'
                    });
                
                detailModal.html(`
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 class="modal-title sr-only" id="${modalId}Label">Detail View</h4>
                            </div>
                            <div class="modal-body markdown-content">
                                ${$(content).find('.post-content').html()}
                            </div>
                        </div>
                    </div>
                `);
                
                // 在父模态框内添加详情模态框
                var parentModal = $(this).closest('.portfolio-modal');
                parentModal.append(detailModal);
                
                // 设置父模态框可滚动
                parentModal.css('overflow-y', 'auto');
                
                // 添加特殊类到背景
                detailModal.on('show.bs.modal', function() {
                    setTimeout(function() {
                        $('.modal-backdrop').last().addClass('detail-backdrop');
                    }, 0);
                });
                
                // 清理模态框
                detailModal.on('hidden.bs.modal', function() {
                    $(this).remove();
                    $('.detail-backdrop').remove();
                    // 恢复父模态框的滚动状态
                    parentModal.css('overflow-y', 'auto');
                });
                
                detailModal.modal('show');
            }).fail(function(error) {
                console.error('Failed to load detail page:', error);
            });
        } else {
            // 在普通页面中的处理
            var page = $(this).data('page');
            window.open(page, '_blank');
        }
    });

    // 处理语言切换按钮点击
    $(document).on('click', '.lang-switch', function(e) {
        // 语言切换按钮的处理逻辑
    });
});