<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerLwbPQuo\srcPiv_Guestbook_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerLwbPQuo/srcPiv_Guestbook_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerLwbPQuo.legacy');

    return;
}

if (!\class_exists(srcPiv_Guestbook_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerLwbPQuo\srcPiv_Guestbook_KernelDevDebugContainer::class, srcPiv_Guestbook_KernelDevDebugContainer::class, false);
}

return new \ContainerLwbPQuo\srcPiv_Guestbook_KernelDevDebugContainer([
    'container.build_hash' => 'LwbPQuo',
    'container.build_id' => 'bf159c11',
    'container.build_time' => 1573554200,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerLwbPQuo');
