<?php defined('IN_WZ') or exit('No direct script access allowed');?>
<?php
    include $this->template('header','core');
?>
<body>
<section class="wrapper">
<!-- page start-->
    <section class="panel">
        <?php echo $this->menu($GLOBALS['_menuid']);?>
        <form action="?m=affiche&f=index&v=sort<?php echo $this->su();?>" name="myform" method="post">
        <div class="panel-body" id="panel-bodys">
            <table class="table table-striped table-advance table-hover">
                <thead>
                <tr>
                    <th class="tablehead">ID</th>
                    <th class="tablehead">发件人</th>
                    <th class="tablehead">收件人</th>
                    <th class="tablehead w-50">内容</th>
                    <th class="tablehead">时间</th>
                    <th class="tablehead">管理</th>
                </tr>
                </thead>
                <tbody>
                <?php
                foreach($result AS $r) {
                    $mr = $this->db->get_one('member', array('uid' => $r['touid']));
                    if($r['username']) {
                        $username = $r['username'];
                    } else {
                        $username = '系统消息';
                    }
                    ?>
                    <tr>
                        <td><?php echo $r['id'];?></td>
                        <td><?php echo $username;?></td>
                        <td><?php echo $mr['username'];?></td>
                        <td><?php echo $r['content'];?></td>
                        <td><?php echo time_format($r['addtime']);?></td>
                        <td>
                            <a href="javascript:makedo('?m=message&f=index&v=delete&id=<?php echo $r['id'];?><?php echo $this->su();?>', '确认删除该记录？')"
                                class="btn btn-danger btn-sm btn-xs">删除</a>
                        </td>
                    </tr>
                <?php
                }
                ?>
                </tbody>
            </table>
            <div class="panel-foot">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="panel-label">
                        <button type="submit" name="submit" class="btn btn-default btn-sm">排序</button>
                    </div>
                    <div class="panel-label">
                        <ul class="pagination pagination-sm">
                            <?php echo $pages;?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </section>
<!-- page end-->
</section>
<script type="text/javascript">
    function edit(id){
        top.openiframe('index.php?m=pay&f=index&v=edit&id='+id+'<?php echo $this->su();?>', 'edit', '改价', 500, 240);
    }
    </script>
<?php include $this->template('footer','core');?>
